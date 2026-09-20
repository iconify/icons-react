import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gkg5cibhi.css';
import '../../css/x/x0qy2n9ac.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gkg5cibhi"/><path class="x0qy2n9ac"/></g>`,
		"fallback": "streamline-ultimate:party-mask",
	});
}

export default Component;

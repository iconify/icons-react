import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/v/vwda8eber.css';
import '../../css/a/a7c1ucbsf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="vwda8eber"/><path class="a7c1ucbsf"/></g>`,
		"fallback": "hugeicons:square-activity",
	});
}

export default Component;

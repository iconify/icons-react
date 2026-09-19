import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/g/gzp-e1b2f.css';
import '../../css/u/ucf3vjbrt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="gzp-e1b2f"/><path class="ucf3vjbrt"/></g>`,
		"fallback": "iconoir:long-arrow-right-down",
	});
}

export default Component;

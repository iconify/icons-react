import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/r/r_87ts72y.css';
import '../../css/w/wdxmxgvsc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="r_87ts72y"/><path class="wdxmxgvsc"/></g>`,
		"fallback": "hugeicons:waze",
	});
}

export default Component;

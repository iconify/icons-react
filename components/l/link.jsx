import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/ti8m527fg.css';
import '../../css/i/ix5q662hl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="ti8m527fg"/><path class="ix5q662hl"/></g>`,
		"fallback": "iconoir:link",
	});
}

export default Component;

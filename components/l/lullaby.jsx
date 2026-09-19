import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/z/zn0tqdxyu.css';
import '../../css/e/ep0r7_npt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="zn0tqdxyu"/><path class="ep0r7_npt"/></g>`,
		"fallback": "iconoir:lullaby",
	});
}

export default Component;

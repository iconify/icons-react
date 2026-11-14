import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/v/vyzc02u8i.css';
import '../../css/c/ckyxfmymk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="vyzc02u8i"/><path class="ckyxfmymk"/></g>`,
		"fallback": "hugeicons:star-circle",
	});
}

export default Component;

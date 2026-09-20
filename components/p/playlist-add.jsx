import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/x/x3yd9f_ef.css';
import '../../css/z/z_3uwpbtj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="x3yd9f_ef"/><path class="z_3uwpbtj"/></g>`,
		"fallback": "mage:playlist-add",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/db1ya9b-k.css';
import '../../css/x/xvjk-cbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="db1ya9b-k"/><path class="xvjk-cbox"/></g>`,
		"fallback": "solar:pulse-linear",
	});
}

export default Component;

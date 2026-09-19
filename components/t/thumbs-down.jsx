import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/i0bfpgbot.css';
import '../../css/y/ytvohw24i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="i0bfpgbot"/><path class="ytvohw24i"/></g>`,
		"fallback": "iconoir:thumbs-down",
	});
}

export default Component;

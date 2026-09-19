import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gu4ywkbqn.css';
import '../../css/b/bos0j4biy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gu4ywkbqn"/><path class="bos0j4biy"/></g>`,
		"fallback": "hugeicons:text-underline",
	});
}

export default Component;

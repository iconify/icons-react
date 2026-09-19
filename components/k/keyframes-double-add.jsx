import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/d/doijo0bmz.css';
import '../../css/i/irazwxbpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="doijo0bmz"/><path class="irazwxbpq"/></g>`,
		"fallback": "hugeicons:keyframes-double-add",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zuvh--brb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zuvh--brb"/>`,
		"fallback": "mingcute:twitch-line",
	});
}

export default Component;

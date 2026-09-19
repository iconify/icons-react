import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygxyg7b8o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygxyg7b8o"/>`,
		"fallback": "codex:list-bulleted",
	});
}

export default Component;

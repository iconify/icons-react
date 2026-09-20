import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yboxb49-l.css';
import '../../css/p/pbutksb1b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yboxb49-l"/><path class="pbutksb1b"/>`,
		"fallback": "uim:snapchat-square",
	});
}

export default Component;

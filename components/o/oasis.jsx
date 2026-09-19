import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yss1rp-_k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yss1rp-_k"/>`,
		"fallback": "game-icons:oasis",
	});
}

export default Component;

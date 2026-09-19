import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s2_xoyybs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s2_xoyybs"/>`,
		"fallback": "game-icons:nautilus-shell",
	});
}

export default Component;

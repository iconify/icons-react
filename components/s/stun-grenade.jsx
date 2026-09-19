import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckxui5r1q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckxui5r1q"/>`,
		"fallback": "game-icons:stun-grenade",
	});
}

export default Component;

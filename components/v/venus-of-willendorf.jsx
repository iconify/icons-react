import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pd86mdi0n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pd86mdi0n"/>`,
		"fallback": "game-icons:venus-of-willendorf",
	});
}

export default Component;

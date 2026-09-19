import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4vn-2u8v.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f4vn-2u8v"/>`,
		"fallback": "game-icons:pearl-necklace",
	});
}

export default Component;

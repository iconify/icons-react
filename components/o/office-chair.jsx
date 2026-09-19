import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9k5d7bkx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9k5d7bkx"/>`,
		"fallback": "game-icons:office-chair",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twn2y2b1q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="twn2y2b1q"/>`,
		"fallback": "game-icons:iron-hulled-warship",
	});
}

export default Component;

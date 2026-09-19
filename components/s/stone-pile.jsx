import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jo-n8x3at.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jo-n8x3at"/>`,
		"fallback": "game-icons:stone-pile",
	});
}

export default Component;

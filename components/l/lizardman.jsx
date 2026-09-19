import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzv2y_5jn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzv2y_5jn"/>`,
		"fallback": "game-icons:lizardman",
	});
}

export default Component;

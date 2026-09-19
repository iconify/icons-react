import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5g7j806z.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5g7j806z"/>`,
		"fallback": "game-icons:jigsaw-box",
	});
}

export default Component;

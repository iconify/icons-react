import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fr8bhqlfy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fr8bhqlfy"/>`,
		"fallback": "game-icons:lightning-shout",
	});
}

export default Component;

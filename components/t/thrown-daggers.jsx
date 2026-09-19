import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/unkg-0nfe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="unkg-0nfe"/>`,
		"fallback": "game-icons:thrown-daggers",
	});
}

export default Component;

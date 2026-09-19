import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/numl1zb8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="numl1zb8q"/>`,
		"fallback": "game-icons:kraken-tentacle",
	});
}

export default Component;

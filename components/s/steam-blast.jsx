import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kqo2l2bps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kqo2l2bps"/>`,
		"fallback": "game-icons:steam-blast",
	});
}

export default Component;

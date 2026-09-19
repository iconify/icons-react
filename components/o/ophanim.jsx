import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3ae-bbrr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3ae-bbrr"/>`,
		"fallback": "game-icons:ophanim",
	});
}

export default Component;

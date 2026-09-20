import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h3fra8bbn.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h3fra8bbn"/>`,
		"fallback": "selfhst:pico-pixel-player-dark",
	});
}

export default Component;

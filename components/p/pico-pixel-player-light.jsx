import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r86xztegz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r86xztegz"/>`,
		"fallback": "selfhst:pico-pixel-player-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ad4jeu_wy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ad4jeu_wy"/>`,
		"fallback": "game-icons:squid",
	});
}

export default Component;

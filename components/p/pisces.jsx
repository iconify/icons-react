import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/we44wpbae.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="we44wpbae"/>`,
		"fallback": "game-icons:pisces",
	});
}

export default Component;

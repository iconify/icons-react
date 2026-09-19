import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lhe5w9bph.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lhe5w9bph"/>`,
		"fallback": "game-icons:kitchen-knives",
	});
}

export default Component;

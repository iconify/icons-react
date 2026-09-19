import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u4k6xuuyu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u4k6xuuyu"/>`,
		"fallback": "game-icons:psychic-waves",
	});
}

export default Component;

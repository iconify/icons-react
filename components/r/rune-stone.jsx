import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pli1b6bwh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pli1b6bwh"/>`,
		"fallback": "game-icons:rune-stone",
	});
}

export default Component;

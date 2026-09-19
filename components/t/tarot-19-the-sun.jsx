import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0sgzib0d.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0sgzib0d"/>`,
		"fallback": "game-icons:tarot-19-the-sun",
	});
}

export default Component;

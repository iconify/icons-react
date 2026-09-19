import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1-y4lplt.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1-y4lplt"/>`,
		"fallback": "game-icons:orb-wand",
	});
}

export default Component;

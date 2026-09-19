import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gl3-q-bps.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gl3-q-bps"/>`,
		"fallback": "game-icons:large-wound",
	});
}

export default Component;

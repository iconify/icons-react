import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tmiv46s4p.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tmiv46s4p"/>`,
		"fallback": "game-icons:three-pointed-shuriken",
	});
}

export default Component;

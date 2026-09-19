import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f6hl0kb_c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f6hl0kb_c"/>`,
		"fallback": "game-icons:perspective-dice-six-faces-random",
	});
}

export default Component;

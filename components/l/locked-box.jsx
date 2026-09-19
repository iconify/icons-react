import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rlik1cyno.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rlik1cyno"/>`,
		"fallback": "game-icons:locked-box",
	});
}

export default Component;

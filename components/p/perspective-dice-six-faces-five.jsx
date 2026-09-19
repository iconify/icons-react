import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gcjo14bcs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gcjo14bcs"/>`,
		"fallback": "game-icons:perspective-dice-six-faces-five",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jdum_g-ri.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jdum_g-ri"/>`,
		"fallback": "game-icons:pirate-coat",
	});
}

export default Component;

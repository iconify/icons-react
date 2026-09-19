import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mal-u0bsz.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mal-u0bsz"/>`,
		"fallback": "game-icons:unstable-projectile",
	});
}

export default Component;

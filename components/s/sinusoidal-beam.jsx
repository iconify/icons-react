import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z_hpm1b5n.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z_hpm1b5n"/>`,
		"fallback": "game-icons:sinusoidal-beam",
	});
}

export default Component;

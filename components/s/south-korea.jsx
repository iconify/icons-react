import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xnp27ng5r.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xnp27ng5r"/>`,
		"fallback": "game-icons:south-korea",
	});
}

export default Component;

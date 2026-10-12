import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hv6j1_b0y.css';
import '../../css/i/i2kxrqbji.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hv6j1_b0y"/><path class="i2kxrqbji"/>`,
		"fallback": "energy-icons:mushroom-20-bold",
	});
}

export default Component;

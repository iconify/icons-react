import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f_vf0_b6s.css';
import '../../css/p/ph4zn2b4t.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f_vf0_b6s"/><path class="ph4zn2b4t"/>`,
		"fallback": "energy-icons:smartphone-vibrate-20-bold",
	});
}

export default Component;

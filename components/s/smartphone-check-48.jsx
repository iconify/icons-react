import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z35ia5jrg.css';
import '../../css/p/p8lm6n71m.css';
import '../../css/z/z4sj3ixdz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z35ia5jrg"/><path class="p8lm6n71m"/><path class="z4sj3ixdz"/>`,
		"fallback": "energy-icons:smartphone-check-48",
	});
}

export default Component;

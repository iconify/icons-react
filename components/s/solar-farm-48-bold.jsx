import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0i931beb.css';
import '../../css/i/ii-al_j4y.css';
import '../../css/i/i7dx0sbjz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0i931beb"/><path class="ii-al_j4y"/><path class="i7dx0sbjz"/>`,
		"fallback": "energy-icons:solar-farm-48-bold",
	});
}

export default Component;

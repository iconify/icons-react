import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/izjyqdbgb.css';
import '../../css/f/fqvg1ojpq.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="izjyqdbgb"/><path class="fqvg1ojpq"/>`,
		"fallback": "energy-icons:smartphone-vibrate-48-bold",
	});
}

export default Component;

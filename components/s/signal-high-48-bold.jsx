import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-zi6-bjz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-zi6-bjz"/>`,
		"fallback": "energy-icons:signal-high-48-bold",
	});
}

export default Component;

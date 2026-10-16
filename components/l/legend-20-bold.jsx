import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jn7c2nbmc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jn7c2nbmc"/>`,
		"fallback": "energy-icons:legend-20-bold",
	});
}

export default Component;

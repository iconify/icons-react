import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7lr-0b7o.css';
import '../../css/d/decjvjero.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7lr-0b7o"/><path class="decjvjero"/>`,
		"fallback": "energy-icons:solar-shading-48-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/domb1qbek.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="domb1qbek"/>`,
		"fallback": "energy-icons:star-half-48-bold",
	});
}

export default Component;

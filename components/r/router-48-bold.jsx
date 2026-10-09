import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y0z5ijwoc.css';
import '../../css/p/pdohdrb9x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y0z5ijwoc"/><path class="pdohdrb9x"/>`,
		"fallback": "energy-icons:router-48-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fj9ruis6z.css';
import '../../css/j/j1qqfackf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fj9ruis6z"/><path class="j1qqfackf"/>`,
		"fallback": "energy-icons:kayak-48",
	});
}

export default Component;

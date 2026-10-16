import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1pz25ahp.css';
import '../../css/z/z0v5_fbef.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1pz25ahp"/><path class="z0v5_fbef"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:invoice-paid-20-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l7qjasj9f.css';
import '../../css/y/y8x22khvr.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l7qjasj9f"/><path class="y8x22khvr"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:lock-check-20-bold",
	});
}

export default Component;

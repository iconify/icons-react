import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hqoigh7pk.css';
import '../../css/c/cwlq3hbmh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hqoigh7pk"/><path class="cwlq3hbmh"/>`,
		"fallback": "energy-icons:screwdriver-48-bold",
	});
}

export default Component;

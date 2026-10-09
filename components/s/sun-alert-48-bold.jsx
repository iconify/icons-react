import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c78rfib1o.css';
import '../../css/h/hwjgqrbah.css';
import '../../css/u/u9s9akrzi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c78rfib1o"/><path class="hwjgqrbah"/><path class="u9s9akrzi"/>`,
		"fallback": "energy-icons:sun-alert-48-bold",
	});
}

export default Component;

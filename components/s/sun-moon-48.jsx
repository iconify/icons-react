import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_hp02zmm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_hp02zmm"/>`,
		"fallback": "energy-icons:sun-moon-48",
	});
}

export default Component;

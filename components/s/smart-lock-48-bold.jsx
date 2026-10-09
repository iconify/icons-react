import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7x4xxw4v.css';
import '../../css/u/u0i-r0xuj.css';
import '../../css/k/kp3nk_bmb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7x4xxw4v"/><path class="u0i-r0xuj"/><path class="kp3nk_bmb"/>`,
		"fallback": "energy-icons:smart-lock-48-bold",
	});
}

export default Component;

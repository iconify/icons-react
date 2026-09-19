import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd6hptbdy.css';
import '../../css/y/ydx4aab2y.css';
import '../../css/p/pnj3j0bnr.css';
import '../../css/e/ejbf23bon.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd6hptbdy"/><path class="ydx4aab2y"/><circle class="pnj3j0bnr"/><path class="ejbf23bon"/>`,
		"fallback": "ion:stopwatch-outline",
	});
}

export default Component;

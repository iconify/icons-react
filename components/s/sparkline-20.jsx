import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ccnocllyv.css';
import '../../css/e/eb4h0cb7r.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ccnocllyv"/><path class="eb4h0cb7r"/>`,
		"fallback": "energy-icons:sparkline-20",
	});
}

export default Component;

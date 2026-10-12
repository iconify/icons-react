import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g3h3u0bwn.css';
import '../../css/p/puz5jibvr.css';
import '../../css/q/q9z_cedxn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g3h3u0bwn"/><path class="puz5jibvr"/><path class="q9z_cedxn"/>`,
		"fallback": "energy-icons:shopping-cart-check-20",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ib-vq554x.css';
import '../../css/a/aqsnv9bnd.css';
import '../../css/s/sh06c0bcw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ib-vq554x"/><path class="aqsnv9bnd"/><path class="sh06c0bcw"/>`,
		"fallback": "energy-icons:shopping-cart-check-20-bold",
	});
}

export default Component;

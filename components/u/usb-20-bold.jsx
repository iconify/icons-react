import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u69qewb7n.css';
import '../../css/z/zlmknobhq.css';
import '../../css/r/ri1oeyk-d.css';
import '../../css/e/e9_5_4bqz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u69qewb7n"/><path class="zlmknobhq"/><path class="ri1oeyk-d"/><path class="e9_5_4bqz"/>`,
		"fallback": "energy-icons:usb-20-bold",
	});
}

export default Component;

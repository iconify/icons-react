import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awouj5jzj.css';
import '../../css/z/z886q2x5d.css';
import '../../css/m/me6j3hnnd.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awouj5jzj"/><path class="z886q2x5d"/><path class="me6j3hnnd"/>`,
		"fallback": "energy-icons:steam-reformer-48-bold",
	});
}

export default Component;

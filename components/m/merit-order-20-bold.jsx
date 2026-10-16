import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w01dflzvf.css';
import '../../css/m/m4k8fxb9u.css';
import '../../css/q/q3l70xbjo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w01dflzvf"/><path class="m4k8fxb9u"/><path class="q3l70xbjo"/>`,
		"fallback": "energy-icons:merit-order-20-bold",
	});
}

export default Component;

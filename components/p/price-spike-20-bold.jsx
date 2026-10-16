import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w01dflzvf.css';
import '../../css/q/qsbap5byo.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w01dflzvf"/><path class="qsbap5byo"/>`,
		"fallback": "energy-icons:price-spike-20-bold",
	});
}

export default Component;

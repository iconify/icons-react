import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pw0ywobnf.css';
import '../../css/i/i06twubnv.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pw0ywobnf"/><path clip-rule="evenodd" class="i06twubnv"/>`,
		"fallback": "lineicons:sliders-horizontal-square-2",
	});
}

export default Component;

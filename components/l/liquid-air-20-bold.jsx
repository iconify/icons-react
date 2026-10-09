import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j93hc8t4v.css';
import '../../css/n/nmzkxebzr.css';
import '../../css/j/jz5b4ybzx.css';
import '../../css/d/dnguvwb7j.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j93hc8t4v"/><path class="nmzkxebzr"/><path class="jz5b4ybzx"/><path class="dnguvwb7j"/>`,
		"fallback": "energy-icons:liquid-air-20-bold",
	});
}

export default Component;

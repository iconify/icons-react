import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ngekccevt.css';
import '../../css/j/j1mz5op1t.css';
import '../../css/l/l-vepwbos.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ngekccevt"/><path class="j1mz5op1t"/><path class="l-vepwbos"/>`,
		"fallback": "fxemoji:pineapple",
	});
}

export default Component;

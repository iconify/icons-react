import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/w/w8_ilnbed.css';
import '../../css/f/f1aecdc4m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="w8_ilnbed"/><path class="f1aecdc4m"/></g>`,
		"fallback": "hugeicons:loom",
	});
}

export default Component;

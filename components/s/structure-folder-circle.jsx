import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/oyx227b1q.css';
import '../../css/j/jap9g-nus.css';
import '../../css/w/wzt-yrb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="oyx227b1q"/><path class="jap9g-nus"/><path class="wzt-yrb2t"/></g>`,
		"fallback": "hugeicons:structure-folder-circle",
	});
}

export default Component;

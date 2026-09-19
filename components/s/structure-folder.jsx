import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/l/lemzthfhi.css';
import '../../css/e/eq01h1enz.css';
import '../../css/w/wzt-yrb2t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="lemzthfhi"/><path class="eq01h1enz"/><path class="wzt-yrb2t"/></g>`,
		"fallback": "hugeicons:structure-folder",
	});
}

export default Component;

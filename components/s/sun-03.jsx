import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/o/o7t96_w7i.css';
import '../../css/t/tqm6etbtt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="o7t96_w7i"/><path class="tqm6etbtt"/></g>`,
		"fallback": "hugeicons:sun-03",
	});
}

export default Component;

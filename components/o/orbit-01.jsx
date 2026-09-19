import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/o7t96_w7i.css';
import '../../css/j/jb0sb1y4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="o7t96_w7i"/><path class="jb0sb1y4t"/></g>`,
		"fallback": "hugeicons:orbit-01",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vw3mjgmyt.css';
import '../../css/l/lbou6_brr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vw3mjgmyt"/><path clip-rule="evenodd" class="lbou6_brr"/></g>`,
		"fallback": "glyphs:tachometer-6-bold",
	});
}

export default Component;

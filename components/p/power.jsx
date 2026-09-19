import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nda4ebcoc.css';
import '../../css/t/t9nly_bze.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nda4ebcoc"/><rect class="t9nly_bze"/></g>`,
		"fallback": "pepicons:power",
	});
}

export default Component;

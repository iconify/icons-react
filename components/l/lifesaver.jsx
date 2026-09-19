import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/f3sakpbgo.css';
import '../../css/z/zbtxb8i9g.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="f3sakpbgo"/><path class="zbtxb8i9g"/></g>`,
		"fallback": "et:lifesaver",
	});
}

export default Component;

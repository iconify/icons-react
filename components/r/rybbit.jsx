import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y_b5g604s.css';
import '../../css/c/c3p99coiz.css';

const viewBox = {"width":263.33,"height":173.53};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y_b5g604s"/><ellipse class="c3p99coiz"/></g>`,
		"fallback": "thesvg:rybbit",
	});
}

export default Component;

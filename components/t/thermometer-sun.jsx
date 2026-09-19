import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l16yf5qut.css';
import '../../css/m/mn2i_ybny.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="l16yf5qut"/><path class="mn2i_ybny"/></g>`,
		"fallback": "bi:thermometer-sun",
	});
}

export default Component;

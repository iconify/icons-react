import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kxixqi9lj.css';
import '../../css/a/a_f2-5b8t.css';
import '../../css/r/r-w7cxbpy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kxixqi9lj"/><path class="a_f2-5b8t"/><path class="r-w7cxbpy"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-scientist",
	});
}

export default Component;

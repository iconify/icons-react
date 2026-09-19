import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z048iib0p.css';
import '../../css/i/i5u2i7bnw.css';
import '../../css/h/hkapj5bgp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z048iib0p"/><path class="i5u2i7bnw"/><path class="hkapj5bgp"/></g>`,
		"fallback": "fluent-emoji-high-contrast:squinting-face-with-tongue",
	});
}

export default Component;

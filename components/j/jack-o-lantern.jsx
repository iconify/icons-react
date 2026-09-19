import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dxvs56lzw.css';
import '../../css/g/g4k7gyb9j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dxvs56lzw"/><path class="g4k7gyb9j"/></g>`,
		"fallback": "fluent-emoji-high-contrast:jack-o-lantern",
	});
}

export default Component;

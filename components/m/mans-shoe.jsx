import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j5i4rns0u.css';
import '../../css/h/hf_n4acfq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j5i4rns0u"/><path class="hf_n4acfq"/></g>`,
		"fallback": "fluent-emoji-high-contrast:mans-shoe",
	});
}

export default Component;

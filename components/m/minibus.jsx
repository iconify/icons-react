import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/yflkxm8ns.css';
import '../../css/o/owfwlqbxf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="yflkxm8ns"/><path class="owfwlqbxf"/></g>`,
		"fallback": "fluent-emoji-high-contrast:minibus",
	});
}

export default Component;

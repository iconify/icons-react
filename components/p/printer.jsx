import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oekcf5s0x.css';
import '../../css/u/uu9vl7b0a.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oekcf5s0x"/><path class="uu9vl7b0a"/></g>`,
		"fallback": "fluent-emoji-high-contrast:printer",
	});
}

export default Component;

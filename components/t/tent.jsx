import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tksj82bqv.css';
import '../../css/z/z92azdbpb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tksj82bqv"/><path class="z92azdbpb"/></g>`,
		"fallback": "fluent-emoji-high-contrast:tent",
	});
}

export default Component;

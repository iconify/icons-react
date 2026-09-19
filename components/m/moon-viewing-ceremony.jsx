import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/r38rqrbud.css';
import '../../css/n/npu8ih3cc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="r38rqrbud"/><path class="npu8ih3cc"/></g>`,
		"fallback": "fluent-emoji-high-contrast:moon-viewing-ceremony",
	});
}

export default Component;

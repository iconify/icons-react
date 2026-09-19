import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cnyua_bsz.css';
import '../../css/g/g59cwhbrx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cnyua_bsz"/><path clip-rule="evenodd" class="g59cwhbrx"/></g>`,
		"fallback": "fluent-emoji-high-contrast:maracas",
	});
}

export default Component;

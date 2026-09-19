import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tl70p-b9i.css';
import '../../css/s/s_zh_6b-p.css';
import '../../css/z/z-46yngir.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tl70p-b9i"/><path class="s_zh_6b-p"/><path class="z-46yngir"/></g>`,
		"fallback": "fluent-emoji-high-contrast:linked-paperclips",
	});
}

export default Component;

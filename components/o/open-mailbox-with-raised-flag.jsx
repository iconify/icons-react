import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qglzmwqqc.css';
import '../../css/b/ba4vn4a3j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qglzmwqqc"/><path class="ba4vn4a3j"/></g>`,
		"fallback": "fluent-emoji-high-contrast:open-mailbox-with-raised-flag",
	});
}

export default Component;

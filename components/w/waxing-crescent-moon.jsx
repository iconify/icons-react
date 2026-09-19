import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/aiqa99bay.css';
import '../../css/b/b52msv7qv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="aiqa99bay"/><path class="b52msv7qv"/></g>`,
		"fallback": "fluent-emoji-high-contrast:waxing-crescent-moon",
	});
}

export default Component;

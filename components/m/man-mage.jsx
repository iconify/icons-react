import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b3oskyb6b.css';
import '../../css/i/i8f9unb0o.css';
import '../../css/t/t9muv9fus.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b3oskyb6b"/><path class="i8f9unb0o"/><path class="t9muv9fus"/></g>`,
		"fallback": "fluent-emoji-high-contrast:man-mage",
	});
}

export default Component;

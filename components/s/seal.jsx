import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gl2zuuzdd.css';
import '../../css/d/du0n0vnma.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gl2zuuzdd"/><path class="du0n0vnma"/></g>`,
		"fallback": "fluent-emoji-high-contrast:seal",
	});
}

export default Component;

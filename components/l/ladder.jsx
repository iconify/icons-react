import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rbvo1ubhr.css';
import '../../css/e/elm0bsbmd.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rbvo1ubhr"/><path class="elm0bsbmd"/></g>`,
		"fallback": "fluent-emoji-flat:ladder",
	});
}

export default Component;

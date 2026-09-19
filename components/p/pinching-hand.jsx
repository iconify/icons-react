import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pfakhabeh.css';
import '../../css/e/enemgybgu.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pfakhabeh"/><path class="enemgybgu"/></g>`,
		"fallback": "fluent-emoji-flat:pinching-hand",
	});
}

export default Component;

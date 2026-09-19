import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f0vdx3b9c.css';
import '../../css/t/tff-0j7ix.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f0vdx3b9c"/><path class="tff-0j7ix"/></g>`,
		"fallback": "fluent-emoji-flat:love-you-gesture-light",
	});
}

export default Component;

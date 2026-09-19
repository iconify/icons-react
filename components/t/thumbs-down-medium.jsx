import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e2nh86b6t.css';
import '../../css/w/w3jz5obce.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e2nh86b6t"/><path class="w3jz5obce"/></g>`,
		"fallback": "fluent-emoji-flat:thumbs-down-medium",
	});
}

export default Component;

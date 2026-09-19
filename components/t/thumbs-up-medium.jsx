import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/n2slargey.css';
import '../../css/h/h_lx1vbxr.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="n2slargey"/><path class="h_lx1vbxr"/></g>`,
		"fallback": "fluent-emoji-flat:thumbs-up-medium",
	});
}

export default Component;

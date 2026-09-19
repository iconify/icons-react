import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w83ngbbji.css';
import '../../css/p/pg07_h8-j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="w83ngbbji"/><path class="pg07_h8-j"/></g>`,
		"fallback": "fluent-emoji-flat:maple-leaf",
	});
}

export default Component;

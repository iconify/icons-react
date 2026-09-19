import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p7s1n_b6l.css';
import '../../css/s/sxoa9bbug.css';
import '../../css/l/lpbf7fb9k.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p7s1n_b6l"/><path class="sxoa9bbug"/><path class="lpbf7fb9k"/></g>`,
		"fallback": "fluent-emoji-flat:leafy-green",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gegwr_b0e.css';
import '../../css/g/grjcl5b0r.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="gegwr_b0e"/><path class="grjcl5b0r"/></g>`,
		"fallback": "fluent-emoji-flat:recycling-symbol",
	});
}

export default Component;

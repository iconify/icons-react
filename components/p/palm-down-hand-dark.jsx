import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d2zxs0i2x.css';
import '../../css/i/iwpsbcb1o.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d2zxs0i2x"/><path class="iwpsbcb1o"/></g>`,
		"fallback": "fluent-emoji-flat:palm-down-hand-dark",
	});
}

export default Component;

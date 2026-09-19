import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p3lgujbly.css';
import '../../css/n/n_t-mnb1u.css';
import '../../css/t/tr7-8zb1d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p3lgujbly"/><path class="n_t-mnb1u"/><path class="tr7-8zb1d"/></g>`,
		"fallback": "fluent-emoji-flat:screwdriver",
	});
}

export default Component;

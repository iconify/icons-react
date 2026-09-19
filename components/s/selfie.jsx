import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dkt9kqb1y.css';
import '../../css/s/ssl2nnbkr.css';
import '../../css/d/d2741_bel.css';
import '../../css/d/dky4xib5v.css';
import '../../css/r/rfbe4wbkb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dkt9kqb1y"/><path class="ssl2nnbkr"/><path class="d2741_bel"/><path class="dky4xib5v"/><path class="rfbe4wbkb"/></g>`,
		"fallback": "fluent-emoji-flat:selfie",
	});
}

export default Component;

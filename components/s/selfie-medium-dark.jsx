import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dkt9kqb1y.css';
import '../../css/q/q4_12jbrw.css';
import '../../css/d/d2741_bel.css';
import '../../css/d/dky4xib5v.css';
import '../../css/d/drg_trbbo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dkt9kqb1y"/><path class="q4_12jbrw"/><path class="d2741_bel"/><path class="dky4xib5v"/><path class="drg_trbbo"/></g>`,
		"fallback": "fluent-emoji-flat:selfie-medium-dark",
	});
}

export default Component;

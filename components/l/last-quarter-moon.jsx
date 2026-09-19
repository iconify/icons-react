import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f4h0e5b5l.css';
import '../../css/k/kg8tmobne.css';
import '../../css/j/jwk4qhbzt.css';
import '../../css/n/nmdlyjmlz.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f4h0e5b5l"/><path class="kg8tmobne"/><path class="jwk4qhbzt"/><path class="nmdlyjmlz"/></g>`,
		"fallback": "fluent-emoji-flat:last-quarter-moon",
	});
}

export default Component;

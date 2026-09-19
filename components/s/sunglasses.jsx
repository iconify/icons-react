import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vqdh-ab7a.css';
import '../../css/p/pnxwm_w2x.css';
import '../../css/u/u0o8qobps.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vqdh-ab7a"/><path class="pnxwm_w2x"/><path class="u0o8qobps"/></g>`,
		"fallback": "fluent-emoji-flat:sunglasses",
	});
}

export default Component;

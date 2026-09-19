import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ij70iuc0v.css';
import '../../css/c/cnjpn0b_x.css';
import '../../css/l/la0y6bzzv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ij70iuc0v"/><path class="cnjpn0b_x"/><path class="la0y6bzzv"/></g>`,
		"fallback": "fluent-emoji-flat:shorts",
	});
}

export default Component;

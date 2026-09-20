import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m7pevhgad.css';
import '../../css/r/rh2wlpewm.css';
import '../../css/a/akfaaw7bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="m7pevhgad"/><path class="rh2wlpewm"/><path class="akfaaw7bz"/></g>`,
		"fallback": "lets-icons:rofl-light",
	});
}

export default Component;

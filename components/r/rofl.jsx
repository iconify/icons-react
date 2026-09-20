import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/abe4_nbce.css';
import '../../css/d/d2d6ddcof.css';
import '../../css/a/akfaaw7bz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="abe4_nbce"/><path class="d2d6ddcof"/><path class="akfaaw7bz"/></g>`,
		"fallback": "lets-icons:rofl",
	});
}

export default Component;

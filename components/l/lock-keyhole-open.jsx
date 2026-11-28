import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/i71m81irf.css';
import '../../css/d/d28o-tblo.css';
import '../../css/j/jb98xl5rn.css';
import '../../css/v/ve22t8bzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="i71m81irf"/><path class="d28o-tblo"/><path class="jb98xl5rn"/><path class="ve22t8bzo"/></g>`,
		"fallback": "iconaut:lock-keyhole-open",
	});
}

export default Component;

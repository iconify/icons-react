import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/m/m39im5btg.css';
import '../../css/i/irx-iw8lh.css';
import '../../css/u/u2ffjhxgz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="m39im5btg"/><path class="irx-iw8lh"/><circle class="u2ffjhxgz"/></g>`,
		"fallback": "hugeicons:lock-keyhole",
	});
}

export default Component;

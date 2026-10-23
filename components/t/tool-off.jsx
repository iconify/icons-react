import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vak25o3nz.css';
import '../../css/l/l0o9iib8s.css';
import '../../css/i/il_7q5b5s.css';
import '../../css/f/f1r4lxbsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vak25o3nz"/><path class="l0o9iib8s"/><path class="il_7q5b5s"/><path class="f1r4lxbsy"/></g>`,
		"fallback": "andrsrxn:tool-off",
	});
}

export default Component;

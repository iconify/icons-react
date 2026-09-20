import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wzyb7sccb.css';
import '../../css/n/nt6hy5b_b.css';
import '../../css/e/ezscoobpn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="wzyb7sccb"/><path class="nt6hy5b_b"/><path class="ezscoobpn"/></g>`,
		"fallback": "reicon:streets-pin-duotone",
	});
}

export default Component;

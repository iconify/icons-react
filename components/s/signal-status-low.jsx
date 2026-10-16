import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxn98z4kn.css';
import '../../css/c/cbgocdc0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="fxn98z4kn"/><rect transform="matrix(-1 0 0 1 7 13.36)" class="cbgocdc0d"/></g>`,
		"fallback": "andrsrxn:signal-status-low",
	});
}

export default Component;

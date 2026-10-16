import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rjcjfp_bk.css';
import '../../css/x/xtjhr9bje.css';
import '../../css/c/ctpgc-b-l.css';
import '../../css/c/cbgocdc0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rjcjfp_bk"/><rect transform="matrix(-1 0 0 1 21.25 2.79)" class="xtjhr9bje"/><rect transform="matrix(-1 0 0 1 14.12 8.3)" class="ctpgc-b-l"/><rect transform="matrix(-1 0 0 1 7 13.36)" class="cbgocdc0d"/></g>`,
		"fallback": "andrsrxn:signal-status-high",
	});
}

export default Component;

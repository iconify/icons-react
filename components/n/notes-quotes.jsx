import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qceht87gk.css';
import '../../css/e/ex-drp13w.css';
import '../../css/c/cc6aaubka.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qceht87gk"/><rect transform="matrix(0 -1 -1 0 20.9 21.46)" class="ex-drp13w"/><path class="cc6aaubka"/></g>`,
		"fallback": "andrsrxn:notes-quotes",
	});
}

export default Component;

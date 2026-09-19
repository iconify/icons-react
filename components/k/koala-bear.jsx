import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/no_d7zbts.css';
import '../../css/u/umog7yb5z.css';
import '../../css/i/i3u11bbdt.css';
import '../../css/h/hn-905oqb.css';
import '../../css/p/pd74q4shl.css';
import '../../css/y/yd2a-j4zt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="no_d7zbts"/><path class="umog7yb5z"/><circle class="i3u11bbdt"/><circle class="hn-905oqb"/><path class="pd74q4shl"/><path class="yd2a-j4zt"/></g>`,
		"fallback": "icon-park:koala-bear",
	});
}

export default Component;

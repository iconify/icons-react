import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pjoarub1b.css';
import '../../css/z/zxnyw2byw.css';
import '../../css/g/gkgzykt4b.css';
import '../../css/f/fyvo1qg6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pjoarub1b wm-deco"/><path class="wm-k zxnyw2byw"/><path class="gkgzykt4b wm-k"/><path class="fyvo1qg6w wm-k"/></g>`,
		"fallback": "withicons:jalebi-sketch",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/a/asiixpb5v.css';
import '../../css/n/ne2fxac0k.css';
import '../../css/n/nm2fn1blw.css';
import '../../css/g/gga-zo6wq.css';
import '../../css/e/ejogo4b8m.css';
import '../../css/v/vmw6mo9zt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="asiixpb5v wm-shadow"/><path class="ne2fxac0k"/><path class="nm2fn1blw"/><path class="gga-zo6wq"/><path class="ejogo4b8m"/><path class="vmw6mo9zt"/></g>`,
		"fallback": "withicons-retro:sd-card",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/crt5atbrn.css';
import '../../css/c/c0z0oj14q.css';
import '../../css/h/h70hkpbuc.css';
import '../../css/a/athxzvcvf.css';
import '../../css/h/h26ybb6-w.css';
import '../../css/r/rrceimnrj.css';
import '../../css/b/b7c_z_bel.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="crt5atbrn"/><circle class="c0z0oj14q"/><ellipse class="h70hkpbuc"/><circle class="athxzvcvf"/><circle class="h26ybb6-w"/><circle class="rrceimnrj"/><path class="b7c_z_bel"/></g>`,
		"fallback": "icon-park-outline:snowman",
	});
}

export default Component;

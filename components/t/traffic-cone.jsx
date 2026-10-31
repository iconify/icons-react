import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xv7931bvu.css';
import '../../css/c/c9ovs1b-c.css';
import '../../css/l/lztb1ab1b.css';
import '../../css/q/qq-9de6yl.css';
import '../../css/x/xdb_uikhm.css';
import '../../css/m/mpm8in82y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow xv7931bvu"/><path class="c9ovs1b-c wm-shadow"/><path class="lztb1ab1b"/><path class="qq-9de6yl"/><path class="xdb_uikhm"/><path class="mpm8in82y"/></g>`,
		"fallback": "withicons-brutal:traffic-cone",
	});
}

export default Component;

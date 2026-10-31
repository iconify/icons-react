import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p1ikf6bxi.css';
import '../../css/p/piiefhb4u.css';
import '../../css/t/t94b19a8b.css';
import '../../css/u/uecn3vbjn.css';
import '../../css/q/qp33kjbei.css';

const viewBox = {"width":301,"height":151};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="p1ikf6bxi"/><path class="piiefhb4u"/><path class="t94b19a8b"/><path class="uecn3vbjn"/><path class="qp33kjbei"/></g>`,
		"fallback": "cif:my",
	});
}

export default Component;

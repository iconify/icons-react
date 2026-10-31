import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/nusa2cscx.css';
import '../../css/h/htmr3pb-l.css';
import '../../css/l/lnx2wmhzv.css';
import '../../css/t/t4v34dz0s.css';
import '../../css/a/al5fkfl2a.css';
import '../../css/y/yhq21tbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="nusa2cscx wm-shadow"/><path class="htmr3pb-l wm-shadow"/><path class="lnx2wmhzv"/><path class="t4v34dz0s"/><path class="al5fkfl2a"/><path class="yhq21tbjj"/></g>`,
		"fallback": "withicons-brutal:map",
	});
}

export default Component;

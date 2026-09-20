import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/obbfhkb8u.css';
import '../../css/s/s2jh_ccnr.css';
import '../../css/l/l97y5cb1g.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="obbfhkb8u"/><path class="s2jh_ccnr"/><path class="l97y5cb1g"/></g>`,
		"fallback": "streamline-color:missed-call",
	});
}

export default Component;

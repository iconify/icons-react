import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ef4fuqwpe.css';
import '../../css/d/dwncepbcl.css';
import '../../css/f/fe47ev76c.css';
import '../../css/a/avv9u_bfv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ef4fuqwpe"/><path class="dwncepbcl"/><path class="fe47ev76c"/><path class="avv9u_bfv"/></g>`,
		"fallback": "andrsrxn:treadmill",
	});
}

export default Component;

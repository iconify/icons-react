import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_-gkxb7l.css';
import '../../css/i/i4z_5rb7o.css';
import '../../css/v/vzkhs6b9b.css';
import '../../css/b/b4h-uwbyi.css';
import '../../css/x/x5ivv0_6b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b_-gkxb7l"/><path class="i4z_5rb7o"/><path class="vzkhs6b9b"/><path class="b4h-uwbyi"/><path class="x5ivv0_6b"/></g>`,
		"fallback": "andrsrxn:user-map-pin",
	});
}

export default Component;

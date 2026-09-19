import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/asfcf6cee.css';
import '../../css/u/u65qiqjyi.css';
import '../../css/a/a0gx-bc2l.css';
import '../../css/m/mft-v6iwe.css';
import '../../css/w/wjf61t0oj.css';
import '../../css/r/rvld1jbmi.css';
import '../../css/g/gx282lb_u.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="asfcf6cee"/><path class="u65qiqjyi"/><path class="a0gx-bc2l"/><path class="mft-v6iwe"/><path class="wjf61t0oj"/><path class="rvld1jbmi"/><path class="gx282lb_u"/>`,
		"fallback": "fxemoji:tearoffcalendar",
	});
}

export default Component;

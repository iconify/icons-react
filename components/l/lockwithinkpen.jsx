import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr92u0wkn.css';
import '../../css/l/lcmv8kbxm.css';
import '../../css/a/aa88hnfrh.css';
import '../../css/c/c9aij2b2f.css';
import '../../css/d/dcztsobwm.css';
import '../../css/g/giefambiq.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr92u0wkn"/><path class="lcmv8kbxm"/><path class="aa88hnfrh"/><path class="c9aij2b2f"/><path class="dcztsobwm"/><path class="giefambiq"/>`,
		"fallback": "fxemoji:lockwithinkpen",
	});
}

export default Component;

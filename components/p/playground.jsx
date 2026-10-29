import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fo8penbcl.css';
import '../../css/s/sczw8r4ky.css';
import '../../css/m/mvw5fabfc.css';
import '../../css/h/htxqckozr.css';
import '../../css/c/cc0y55b7x.css';
import '../../css/i/ikzbt7qzu.css';
import '../../css/f/f330r4bdm.css';
import '../../css/j/juy-s4bsd.css';
import '../../css/g/gv_bpnbwq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fo8penbcl wm-shadow"/><path class="sczw8r4ky wm-k"/><path class="mvw5fabfc wm-k"/><path class="htxqckozr wm-k"/><path class="cc0y55b7x wm-k"/><path class="ikzbt7qzu wm-k"/><path class="f330r4bdm wm-k"/><path class="juy-s4bsd wm-k"/><path class="gv_bpnbwq wm-k"/>`,
		"fallback": "withicons-pastel:playground",
	});
}

export default Component;

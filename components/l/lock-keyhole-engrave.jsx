import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a-r7o131d.css';
import '../../css/p/p7j_tcb2n.css';
import '../../css/x/x5alubcsr.css';
import '../../css/h/hmb0o_-2y.css';
import '../../css/b/b86buo32x.css';
import '../../css/d/dyvgatb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a-r7o131d wm-k"/><path class="p7j_tcb2n wm-a"/><path class="wm-shadow x5alubcsr"/><path class="hmb0o_-2y wm-a"/><path class="b86buo32x wm-k"/><path class="dyvgatb7a wm-a"/></g>`,
		"fallback": "withicons:lock-keyhole-engrave",
	});
}

export default Component;

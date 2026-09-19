import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh377bbur.css';
import '../../css/m/mrupvohhm.css';
import '../../css/r/rppc_db6b.css';
import '../../css/m/mm6yhpb8c.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh377bbur"/><path class="mrupvohhm"/><path class="rppc_db6b"/><path class="mm6yhpb8c"/>`,
		"fallback": "fxemoji:lowerleftpen",
	});
}

export default Component;

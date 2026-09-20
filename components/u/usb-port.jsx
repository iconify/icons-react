import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rtzhfab_b.css';
import '../../css/v/vac3o6buu.css';
import '../../css/l/loh_jjy_t.css';
import '../../css/x/xyrvogb6c.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rtzhfab_b"/><path class="vac3o6buu"/><path class="loh_jjy_t"/><path class="xyrvogb6c"/></g>`,
		"fallback": "streamline-flex-color:usb-port",
	});
}

export default Component;

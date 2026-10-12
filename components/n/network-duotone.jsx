import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/ztls5r9fg.css';
import '../../css/m/m3to96b8r.css';
import '../../css/v/vr5_g0bmc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ztls5r9fg"/><path class="m3to96b8r"/><path class="vr5_g0bmc"/></g>`,
		"fallback": "lucide-extended:network-duotone",
	});
}

export default Component;

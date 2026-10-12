import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i0ftf3b_f.css';
import '../../css/w/w08rz4bmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i0ftf3b_f"/><path class="w08rz4bmx"/></g>`,
		"fallback": "lucide-extended:usb-c-port-duotone",
	});
}

export default Component;

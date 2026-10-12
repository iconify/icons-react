import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wo7-08bgi.css';
import '../../css/a/ai7pmybcz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wo7-08bgi"/><path class="ai7pmybcz"/></g>`,
		"fallback": "andrsrxn:usb-c-port",
	});
}

export default Component;

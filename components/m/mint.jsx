import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zwlmx-b3y.css';
import '../../css/d/dlg1f9bpn.css';
import '../../css/v/vioal8b1j.css';
import '../../css/p/p_2y21whp.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zwlmx-b3y"/><path class="dlg1f9bpn"/><path class="vioal8b1j"/><path class="p_2y21whp"/>`,
		"fallback": "iconito:mint",
	});
}

export default Component;

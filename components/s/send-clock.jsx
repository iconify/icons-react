import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e0bjz5b4t.css';
import '../../css/v/v-c8g5bhh.css';
import '../../css/k/k256ozbaa.css';
import '../../css/n/np-d-1y9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="e0bjz5b4t"/><path class="v-c8g5bhh"/><circle class="k256ozbaa"/><path class="np-d-1y9l"/></g>`,
		"fallback": "andrsrxn:send-clock",
	});
}

export default Component;

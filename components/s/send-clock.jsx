import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/w8elyn5xu.css';
import '../../css/s/spzdkwgqo.css';
import '../../css/k/k256ozbaa.css';
import '../../css/b/b15fm3bsy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="w8elyn5xu"/><path class="spzdkwgqo"/><circle class="k256ozbaa"/><path class="b15fm3bsy"/></g>`,
		"fallback": "andrsrxn:send-clock",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_4rwbbkx.css';
import '../../css/i/iq4t2p2xt.css';
import '../../css/f/fulwhhb_m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c_4rwbbkx"/><path class="iq4t2p2xt"/><circle class="fulwhhb_m"/></g>`,
		"fallback": "icon-park-outline:message-unread",
	});
}

export default Component;

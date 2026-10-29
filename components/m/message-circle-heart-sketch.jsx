import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/usvo9t7dp.css';
import '../../css/g/gdq37xqqe.css';
import '../../css/f/fgjr8qb3s.css';
import '../../css/i/i0-mcjp7u.css';
import '../../css/x/xwf4h3f-g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="usvo9t7dp"/><path class="gdq37xqqe wm-k"/><path class="fgjr8qb3s wm-a"/><path class="i0-mcjp7u wm-k"/><path class="wm-a xwf4h3f-g"/></g>`,
		"fallback": "withicons:message-circle-heart-sketch",
	});
}

export default Component;

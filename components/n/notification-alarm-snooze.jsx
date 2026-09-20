import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/h/h8q7-oy7e.css';
import '../../css/d/dided9ato.css';
import '../../css/s/s9420rbnc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="h8q7-oy7e"/><path class="dided9ato"/><path class="s9420rbnc"/></g>`,
		"fallback": "streamline-sharp-color:notification-alarm-snooze",
	});
}

export default Component;

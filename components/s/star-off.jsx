import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ecww0xbqd.css';
import '../../css/h/h0umzdv8a.css';
import '../../css/o/o9g6zv5uo.css';
import '../../css/t/ts3pssbun.css';
import '../../css/d/d2_frsbri.css';
import '../../css/o/okyy18b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ecww0xbqd wm-k"/><path class="h0umzdv8a wm-s"/><path class="o9g6zv5uo wm-deco"/><path class="ts3pssbun wm-k"/><path class="d2_frsbri wm-s"/><path class="okyy18b0a wm-shadow"/></g>`,
		"fallback": "withicons-valentine:star-off",
	});
}

export default Component;

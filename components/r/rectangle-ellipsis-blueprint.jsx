import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/kbx02gbvp.css';
import '../../css/v/vu5vvzbot.css';
import '../../css/y/yrdr5wbbm.css';
import '../../css/q/qu1_sqbpg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="kbx02gbvp wm-deco"/><path class="vu5vvzbot wm-deco"/><path class="wm-k yrdr5wbbm"/><path class="qu1_sqbpg wm-a"/></g>`,
		"fallback": "withicons:rectangle-ellipsis-blueprint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sk6n57b7v.css';
import '../../css/a/aqc78kpst.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/z/z5ydvbbjm.css';
import '../../css/s/sv8__t8-c.css';
import '../../css/l/l-n171btg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="sk6n57b7v wm-deco"/><path class="aqc78kpst wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="wm-k z5ydvbbjm"/><path class="sv8__t8-c wm-a"/><path class="l-n171btg wm-k"/></g>`,
		"fallback": "withicons:lightbulb-blueprint",
	});
}

export default Component;

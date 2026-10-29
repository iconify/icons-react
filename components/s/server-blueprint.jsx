import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jgdqptv2h.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/e/eg0c6g5mr.css';
import '../../css/j/jv1tzacrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jgdqptv2h wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="eg0c6g5mr wm-k"/><path class="jv1tzacrj wm-a"/></g>`,
		"fallback": "withicons:server-blueprint",
	});
}

export default Component;

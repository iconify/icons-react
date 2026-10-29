import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/m/mcbadj-du.css';
import '../../css/e/e6-3kjdcx.css';
import '../../css/w/w0e70wbbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="mcbadj-du wm-deco"/><path class="e6-3kjdcx wm-k"/><path class="w0e70wbbt wm-a"/></g>`,
		"fallback": "withicons:plane-takeoff-blueprint",
	});
}

export default Component;

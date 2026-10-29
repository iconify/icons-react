import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/z3f7_pfis.css';
import '../../css/v/vu5vvzbot.css';
import '../../css/q/qt5v5_b8o.css';
import '../../css/y/y875pzbpu.css';
import '../../css/w/wkqdwlb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco z3f7_pfis"/><path class="vu5vvzbot wm-deco"/><path class="qt5v5_b8o wm-k"/><path class="wm-a y875pzbpu"/><path class="wkqdwlb1y wm-k"/></g>`,
		"fallback": "withicons:link-2-blueprint",
	});
}

export default Component;

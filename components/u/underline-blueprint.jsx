import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lbkshfbwn.css';
import '../../css/e/eb2qabupy.css';
import '../../css/a/axkxll7ka.css';
import '../../css/e/ey8whr8xr.css';
import '../../css/r/r5dk_vx7g.css';
import '../../css/x/xlsaqmbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lbkshfbwn wm-deco"/><path class="eb2qabupy wm-deco"/><path class="axkxll7ka wm-k"/><path class="ey8whr8xr wm-a"/><path class="r5dk_vx7g wm-k"/><path class="wm-a xlsaqmbjh"/></g>`,
		"fallback": "withicons:underline-blueprint",
	});
}

export default Component;

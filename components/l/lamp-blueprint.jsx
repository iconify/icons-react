import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/op1sfgeen.css';
import '../../css/v/vja3av1ob.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/b/btbdntbyc.css';
import '../../css/e/ewwv0nb-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="op1sfgeen wm-deco"/><path class="vja3av1ob wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="btbdntbyc"/><path class="ewwv0nb-m"/></g>`,
		"fallback": "withicons:lamp-blueprint",
	});
}

export default Component;

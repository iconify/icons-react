import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bxl18ejyf.css';
import '../../css/w/wn-115bic.css';
import '../../css/k/kty6k6b5v.css';
import '../../css/d/dj8foab4p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bxl18ejyf wm-deco"/><path class="wm-deco wn-115bic"/><path class="kty6k6b5v"/><path class="dj8foab4p"/></g>`,
		"fallback": "withicons:menu-blueprint",
	});
}

export default Component;

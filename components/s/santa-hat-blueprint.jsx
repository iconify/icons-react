import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/x9iy5-b4w.css';
import '../../css/y/yvlpt87dq.css';
import '../../css/l/lusu08b_g.css';
import '../../css/c/c-rwg44xn.css';
import '../../css/m/m129ctbgm.css';
import '../../css/f/fxfoz_mdu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco x9iy5-b4w"/><path class="wm-deco yvlpt87dq"/><path class="lusu08b_g wm-deco"/><path class="c-rwg44xn wm-k"/><path class="m129ctbgm wm-a"/><path class="fxfoz_mdu wm-k"/></g>`,
		"fallback": "withicons:santa-hat-blueprint",
	});
}

export default Component;

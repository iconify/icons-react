import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wcjghl10h.css';
import '../../css/c/cepculi1i.css';
import '../../css/t/tjwfuacrq.css';
import '../../css/y/yfi554o7f.css';
import '../../css/u/up51oabts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wcjghl10h wm-deco"/><path class="cepculi1i wm-k"/><path class="tjwfuacrq wm-k"/><path class="wm-k yfi554o7f"/><path class="up51oabts wm-shine"/></g>`,
		"fallback": "withicons-anime:navigation",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xjji9bclf.css';
import '../../css/s/shnhwhbfw.css';
import '../../css/s/stk43etdc.css';
import '../../css/u/un9n4bcth.css';
import '../../css/c/chlo42bnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wm-k xjji9bclf"/><path class="shnhwhbfw wm-deco"/><path class="stk43etdc wm-k"/><path class="un9n4bcth wm-k"/><path class="chlo42bnl wm-shadow"/></g>`,
		"fallback": "withicons-valentine:tent",
	});
}

export default Component;

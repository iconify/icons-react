import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mj3898byv.css';
import '../../css/v/vlrbihbra.css';
import '../../css/p/piis-qmmh.css';
import '../../css/m/mrpsvib8v.css';
import '../../css/e/e4v6jpbkb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mj3898byv wm-k"/><path class="vlrbihbra wm-a"/><path class="piis-qmmh wm-shadow"/><path class="mrpsvib8v wm-k"/><path class="e4v6jpbkb wm-a"/></g>`,
		"fallback": "withicons:rotate-ccw-engrave",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/a/a5-ljbc1k.css';
import '../../css/e/el2i0p4-i.css';
import '../../css/h/h3y64vb5d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="a5-ljbc1k"/><path class="el2i0p4-i wm-shadow"/><path class="h3y64vb5d"/></g>`,
		"fallback": "withicons:power-engrave",
	});
}

export default Component;

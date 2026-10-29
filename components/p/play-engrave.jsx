import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ij_oxib5j.css';
import '../../css/r/r0r9_sije.css';
import '../../css/l/l6swvrbfj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ij_oxib5j"/><path class="r0r9_sije wm-shadow"/><path class="l6swvrbfj"/></g>`,
		"fallback": "withicons:play-engrave",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w3rngib8b.css';
import '../../css/c/cdu43zb6j.css';
import '../../css/d/dunzu781y.css';
import '../../css/j/jffir3tnu.css';
import '../../css/s/sx4h3cbfw.css';
import '../../css/r/r8_j-9bks.css';
import '../../css/z/zr33d1b2c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w3rngib8b wm-k"/><path class="cdu43zb6j wm-a"/><path class="dunzu781y wm-shadow"/><path class="jffir3tnu wm-k"/><path class="sx4h3cbfw wm-a"/><path class="r8_j-9bks wm-a"/><path class="wm-s zr33d1b2c"/></g>`,
		"fallback": "withicons:love-letter-engrave",
	});
}

export default Component;

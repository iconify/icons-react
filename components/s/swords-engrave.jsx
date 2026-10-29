import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l85ttcc8d.css';
import '../../css/n/nj_k7fbow.css';
import '../../css/f/fyutsyjov.css';
import '../../css/i/iy5v8lbll.css';
import '../../css/t/tmj-ls_rw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l85ttcc8d wm-k"/><path class="nj_k7fbow wm-a"/><path class="fyutsyjov wm-shadow"/><path class="iy5v8lbll wm-k"/><path class="tmj-ls_rw wm-a"/></g>`,
		"fallback": "withicons:swords-engrave",
	});
}

export default Component;

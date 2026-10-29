import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/f/f3r-8yyut.css';
import '../../css/a/att42bbkg.css';
import '../../css/j/j_vnhybnm.css';
import '../../css/r/rri6uechc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="f3r-8yyut"/><path class="att42bbkg wm-shadow"/><path class="j_vnhybnm"/><path class="rri6uechc"/></g>`,
		"fallback": "withicons:thandai-engrave",
	});
}

export default Component;

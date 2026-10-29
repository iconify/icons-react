import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/n/ne9-j4b8v.css';
import '../../css/r/r2gw6ybqd.css';
import '../../css/p/pjkpc3btw.css';
import '../../css/w/wbrax19ht.css';
import '../../css/w/w439gnkso.css';
import '../../css/a/afxiy6lsc.css';
import '../../css/f/fmtboebos.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ne9-j4b8v wm-k"/><path class="r2gw6ybqd wm-a"/><path class="pjkpc3btw wm-s"/><path class="wbrax19ht wm-shadow"/><path class="w439gnkso wm-a"/><path class="afxiy6lsc wm-k"/><path class="fmtboebos wm-s"/></g>`,
		"fallback": "withicons:shower-head-engrave",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/o/otutvum0e.css';
import '../../css/b/bnkr13bhw.css';
import '../../css/y/yyif5dk8a.css';
import '../../css/x/xe65wvb-d.css';
import '../../css/j/j3c_s-bua.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="otutvum0e wm-k"/><path class="bnkr13bhw wm-s"/><path class="wm-shadow yyif5dk8a"/><path class="wm-k xe65wvb-d"/><path class="j3c_s-bua wm-s"/></g>`,
		"fallback": "withicons:list-x-engrave",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/ugmyip8ns.css';
import '../../css/t/tvarxpbhy.css';
import '../../css/h/h561d5hhu.css';
import '../../css/a/ao21d5blb.css';
import '../../css/y/y8u1gcciv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ugmyip8ns wm-k"/><path class="tvarxpbhy wm-a"/><path class="h561d5hhu wm-shadow"/><path class="ao21d5blb wm-k"/><path class="wm-a y8u1gcciv"/></g>`,
		"fallback": "withicons:panel-left-close-engrave",
	});
}

export default Component;

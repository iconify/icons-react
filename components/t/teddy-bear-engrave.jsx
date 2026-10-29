import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/gwygt9btv.css';
import '../../css/d/d_46y1bnq.css';
import '../../css/q/quetn71pl.css';
import '../../css/u/u90yf2b5z.css';
import '../../css/r/rz80qw0kw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="gwygt9btv wm-k"/><path class="d_46y1bnq wm-a"/><path class="quetn71pl wm-shadow"/><path class="u90yf2b5z wm-k"/><path class="rz80qw0kw wm-a"/></g>`,
		"fallback": "withicons:teddy-bear-engrave",
	});
}

export default Component;

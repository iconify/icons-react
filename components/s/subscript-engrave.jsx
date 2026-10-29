import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/u5fjk2boe.css';
import '../../css/d/d32xvquwx.css';
import '../../css/f/fpn8subxg.css';
import '../../css/x/x-tp0_soj.css';
import '../../css/q/qrlg7vb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="u5fjk2boe wm-k"/><path class="d32xvquwx wm-a"/><path class="fpn8subxg wm-shadow"/><path class="wm-k x-tp0_soj"/><path class="qrlg7vb3j wm-a"/></g>`,
		"fallback": "withicons:subscript-engrave",
	});
}

export default Component;

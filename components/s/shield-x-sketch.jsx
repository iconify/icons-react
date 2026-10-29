import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/p/pv92h6bei.css';
import '../../css/u/u9ozzachk.css';
import '../../css/h/h46be0bwu.css';
import '../../css/s/s48hxlbad.css';
import '../../css/f/f0ef3bb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="pv92h6bei"/><path class="u9ozzachk wm-k"/><path class="h46be0bwu wm-a"/><path class="s48hxlbad wm-k"/><path class="f0ef3bb2k wm-a"/></g>`,
		"fallback": "withicons:shield-x-sketch",
	});
}

export default Component;

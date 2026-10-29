import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/q/q-tl41blh.css';
import '../../css/j/j56euqa_l.css';
import '../../css/h/hpnt--oey.css';
import '../../css/e/eoiz0rolg.css';
import '../../css/p/p2z9olxff.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="q-tl41blh wm-k"/><path class="j56euqa_l wm-a"/><path class="hpnt--oey wm-shadow"/><path class="eoiz0rolg wm-k"/><path class="p2z9olxff wm-a"/></g>`,
		"fallback": "withicons:map-engrave",
	});
}

export default Component;

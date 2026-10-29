import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/g/g2r-0hbhb.css';
import '../../css/z/z127gbbsw.css';
import '../../css/r/r1lz8sbqe.css';
import '../../css/f/flvjb4byi.css';
import '../../css/c/ce4_fwbku.css';
import '../../css/v/v4zv_uo1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="g2r-0hbhb wm-k"/><path class="wm-a z127gbbsw"/><path class="r1lz8sbqe wm-shadow"/><path class="flvjb4byi wm-a"/><path class="ce4_fwbku wm-k"/><path class="v4zv_uo1i wm-a"/></g>`,
		"fallback": "withicons:printer-engrave",
	});
}

export default Component;

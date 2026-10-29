import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/r666aifuf.css';
import '../../css/n/nfv97lb1r.css';
import '../../css/o/oonylrreg.css';
import '../../css/w/wi2sckbls.css';
import '../../css/w/wgi9_72zv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="r666aifuf wm-k"/><path class="nfv97lb1r wm-a"/><path class="oonylrreg wm-shadow"/><path class="wi2sckbls wm-k"/><path class="wgi9_72zv wm-a"/></g>`,
		"fallback": "withicons:rss-engrave",
	});
}

export default Component;

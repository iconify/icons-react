import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/k/knwu_bb7f.css';
import '../../css/u/ub4cw5b7g.css';
import '../../css/u/ue6igjb8l.css';
import '../../css/l/l9lv5_bcf.css';
import '../../css/e/epabx8bdv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="knwu_bb7f wm-k"/><path class="ub4cw5b7g wm-a"/><path class="ue6igjb8l wm-shadow"/><path class="l9lv5_bcf wm-k"/><path class="epabx8bdv wm-a"/></g>`,
		"fallback": "withicons:scan-search-engrave",
	});
}

export default Component;

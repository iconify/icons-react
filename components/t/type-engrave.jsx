import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ei557tb3l.css';
import '../../css/a/aolijmb7g.css';
import '../../css/z/zskcxobcc.css';
import '../../css/h/hbl-b_bwz.css';
import '../../css/c/cdq-ahbxh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ei557tb3l wm-k"/><path class="aolijmb7g wm-a"/><path class="wm-shadow zskcxobcc"/><path class="hbl-b_bwz wm-k"/><path class="cdq-ahbxh wm-a"/></g>`,
		"fallback": "withicons:type-engrave",
	});
}

export default Component;

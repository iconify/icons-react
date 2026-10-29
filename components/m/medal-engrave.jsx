import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e7tt45dak.css';
import '../../css/z/zdr08-b0q.css';
import '../../css/k/kb_ut0vka.css';
import '../../css/x/xewy-x6xy.css';
import '../../css/b/b151ecb2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e7tt45dak wm-k"/><path class="wm-a zdr08-b0q"/><path class="kb_ut0vka wm-shadow"/><path class="wm-a xewy-x6xy"/><path class="b151ecb2k wm-k"/></g>`,
		"fallback": "withicons:medal-engrave",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/e-x2tkb2b.css';
import '../../css/s/seevwwrhh.css';
import '../../css/m/m948spvmd.css';
import '../../css/s/svvk-3k2b.css';
import '../../css/t/t2srnhboy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="e-x2tkb2b wm-k"/><path class="seevwwrhh wm-a"/><path class="m948spvmd wm-shadow"/><path class="svvk-3k2b wm-k"/><path class="t2srnhboy wm-a"/></g>`,
		"fallback": "withicons:save-engrave",
	});
}

export default Component;

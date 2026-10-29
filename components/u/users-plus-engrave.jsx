import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vldmtbckl.css';
import '../../css/e/e052gicpm.css';
import '../../css/t/tfesyebsw.css';
import '../../css/p/poac5v9uw.css';
import '../../css/f/fgf5ofbsz.css';
import '../../css/p/pg2z7mb-s.css';
import '../../css/b/byz546bvh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vldmtbckl wm-k"/><path class="e052gicpm wm-a"/><path class="tfesyebsw wm-s"/><path class="poac5v9uw wm-shadow"/><path class="fgf5ofbsz wm-k"/><path class="pg2z7mb-s wm-a"/><path class="byz546bvh wm-s"/></g>`,
		"fallback": "withicons:users-plus-engrave",
	});
}

export default Component;

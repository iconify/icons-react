import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/wa555jbpi.css';
import '../../css/a/aiy9j-bpt.css';
import '../../css/t/tpcjdkbvv.css';
import '../../css/r/r-fvff_qk.css';
import '../../css/x/xgrg7usag.css';
import '../../css/p/pse4-422d.css';
import '../../css/m/m5igdmzqn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="wa555jbpi wm-k"/><path class="aiy9j-bpt wm-a"/><path class="tpcjdkbvv wm-shadow"/><path class="r-fvff_qk wm-k"/><path class="wm-a xgrg7usag"/><path class="pse4-422d wm-k"/><path class="m5igdmzqn wm-a"/></g>`,
		"fallback": "withicons:refresh-engrave",
	});
}

export default Component;

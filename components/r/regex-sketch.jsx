import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/l1pv_sbbk.css';
import '../../css/r/ra2whvb7t.css';
import '../../css/i/iz66ytb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="l1pv_sbbk wm-k"/><path class="ra2whvb7t wm-k"/><path class="iz66ytb_v wm-a"/></g>`,
		"fallback": "withicons:regex-sketch",
	});
}

export default Component;

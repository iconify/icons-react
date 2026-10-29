import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/v/vcj0rxbfv.css';
import '../../css/u/uam27y2rr.css';
import '../../css/r/r8t9kbczu.css';
import '../../css/r/rj-hvabwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="vcj0rxbfv"/><path class="uam27y2rr wm-k"/><path class="r8t9kbczu wm-k"/><path class="rj-hvabwd wm-a"/></g>`,
		"fallback": "withicons:thumbs-up-sketch",
	});
}

export default Component;

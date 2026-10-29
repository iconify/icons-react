import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/ifb93ynzy.css';
import '../../css/t/tq1j5cbbn.css';
import '../../css/b/bak33s4ai.css';
import '../../css/a/at880-k6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ifb93ynzy wm-k"/><path class="tq1j5cbbn wm-a"/><path class="bak33s4ai wm-k"/><path class="at880-k6w wm-a"/></g>`,
		"fallback": "withicons:trending-down-sketch",
	});
}

export default Component;

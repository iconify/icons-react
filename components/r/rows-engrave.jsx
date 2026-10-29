import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/t/tgf0uybva.css';
import '../../css/l/lpxc06jjq.css';
import '../../css/u/uzn2ehbxw.css';
import '../../css/l/lg-8n1num.css';
import '../../css/a/ae-e09b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="tgf0uybva wm-k"/><path class="lpxc06jjq wm-a"/><path class="uzn2ehbxw wm-shadow"/><path class="lg-8n1num wm-k"/><path class="ae-e09b3w wm-a"/></g>`,
		"fallback": "withicons:rows-engrave",
	});
}

export default Component;

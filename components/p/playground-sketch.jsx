import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eh56edcyw.css';
import '../../css/t/t8a7fpred.css';
import '../../css/a/awkx36b2i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="eh56edcyw wm-k"/><path class="t8a7fpred wm-k"/><path class="awkx36b2i wm-k"/></g>`,
		"fallback": "withicons:playground-sketch",
	});
}

export default Component;

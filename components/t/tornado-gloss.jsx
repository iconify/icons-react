import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/vuxr30esr.css';
import '../../css/m/m4gw_lbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="vuxr30esr wm-k"/><path class="m4gw_lbvx wm-a"/></g>`,
		"fallback": "withicons:tornado-gloss",
	});
}

export default Component;

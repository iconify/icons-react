import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/ux47z_bqx.css';
import '../../css/v/v_-uh7mck.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ux47z_bqx wm-k"/><path class="v_-uh7mck wm-a"/></g>`,
		"fallback": "withicons:medal-gloss",
	});
}

export default Component;

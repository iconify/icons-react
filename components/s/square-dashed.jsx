import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bimk_9o9d.css';
import '../../css/x/x3jpfybpn.css';
import '../../css/y/y67z03bil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="bimk_9o9d wm-k"/><path class="wm-k x3jpfybpn"/><path class="wm-k y67z03bil"/></g>`,
		"fallback": "withicons-anime:square-dashed",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nvfwybbpi.css';
import '../../css/p/paqfsmbkx.css';
import '../../css/w/w3yj63bfm.css';
import '../../css/u/u4i-b5b-f.css';
import '../../css/j/j0fiiccut.css';
import '../../css/t/tbu5grbmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nvfwybbpi wm-k"/><path class="paqfsmbkx wm-k"/><path class="w3yj63bfm wm-k"/><path class="u4i-b5b-f wm-a"/><path class="j0fiiccut wm-a"/><path class="tbu5grbmr wm-a"/></g>`,
		"fallback": "withicons-anime:split",
	});
}

export default Component;

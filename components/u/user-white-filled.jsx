import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vs-iz_bnz.css';
import '../../css/x/xpx-tzx3i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vs-iz_bnz"/><path clip-rule="evenodd" class="xpx-tzx3i"/></g>`,
		"fallback": "lsicon:user-white-filled",
	});
}

export default Component;

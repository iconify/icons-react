import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d8f_42sab.css';
import '../../css/e/ect8cfbxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d8f_42sab"/><path clip-rule="evenodd" class="ect8cfbxp"/></g>`,
		"fallback": "majesticons:planet-ring-2",
	});
}

export default Component;

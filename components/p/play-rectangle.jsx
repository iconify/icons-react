import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rh7upse8n.css';
import '../../css/z/z-jhzydsn.css';
import '../../css/w/w2qx0zb0u.css';
import '../../css/o/ozwwbac2e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rh7upse8n"/><path class="z-jhzydsn"/><path class="w2qx0zb0u"/><path class="ozwwbac2e"/></g>`,
		"fallback": "tdesign:play-rectangle",
	});
}

export default Component;

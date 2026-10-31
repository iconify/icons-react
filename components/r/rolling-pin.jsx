import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t4loxubrc.css';
import '../../css/w/w67figubd.css';
import '../../css/g/gti5w8btx.css';
import '../../css/c/cung03bja.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t4loxubrc wm-k"/><path class="w67figubd wm-deco"/><path class="gti5w8btx wm-k"/><path class="cung03bja wm-shadow"/></g>`,
		"fallback": "withicons-valentine:rolling-pin",
	});
}

export default Component;

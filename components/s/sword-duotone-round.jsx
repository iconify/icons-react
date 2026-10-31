import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xuoy9ibxm.css';
import '../../css/d/dg6f8u7wi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xuoy9ibxm"/><path class="dg6f8u7wi"/></g>`,
		"fallback": "coolicons:sword-duotone-round",
	});
}

export default Component;

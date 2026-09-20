import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rm-fy4pzz.css';
import '../../css/d/ddn7pfbsi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rm-fy4pzz"/><path class="ddn7pfbsi"/></g>`,
		"fallback": "si:pause-duotone",
	});
}

export default Component;

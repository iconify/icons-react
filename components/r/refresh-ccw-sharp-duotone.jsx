import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/e-9nayb1t.css';
import '../../css/f/f2kuhacpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="e-9nayb1t"/><path class="f2kuhacpl"/></g>`,
		"fallback": "keyline-icons:refresh-ccw-sharp-duotone",
	});
}

export default Component;

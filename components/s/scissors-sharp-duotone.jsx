import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/x/x1q46ybnx.css';
import '../../css/a/a01xlib4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="x1q46ybnx"/><path class="a01xlib4f"/></g>`,
		"fallback": "keyline-icons:scissors-sharp-duotone",
	});
}

export default Component;

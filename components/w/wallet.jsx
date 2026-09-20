import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gx-369bjn.css';
import '../../css/r/rrhjx2bmg.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3 4)" class="bi12bsetm"><path class="gx-369bjn"/><circle class="rrhjx2bmg"/></g>`,
		"fallback": "system-uicons:wallet",
	});
}

export default Component;

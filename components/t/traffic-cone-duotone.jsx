import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwqayj22v.css';
import '../../css/x/x7t9s_bwv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pwqayj22v secondary"/><path class="primary x7t9s_bwv"/></g>`,
		"fallback": "iconaut:traffic-cone-duotone",
	});
}

export default Component;

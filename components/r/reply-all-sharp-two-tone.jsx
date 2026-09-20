import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/y/yzaa0w5oy.css';
import '../../css/r/r9g1c9bux.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="yzaa0w5oy"/><path class="r9g1c9bux"/></g>`,
		"fallback": "keyline-icons:reply-all-sharp-two-tone",
	});
}

export default Component;

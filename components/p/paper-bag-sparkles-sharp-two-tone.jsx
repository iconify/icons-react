import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/e/epepgykcc.css';
import '../../css/x/xhj1trd8o.css';
import '../../css/t/t-fa8-bok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="epepgykcc"/><path class="xhj1trd8o"/><path class="t-fa8-bok"/></g>`,
		"fallback": "keyline-icons:paper-bag-sparkles-sharp-two-tone",
	});
}

export default Component;

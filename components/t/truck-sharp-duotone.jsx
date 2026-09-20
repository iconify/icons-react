import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/n/ni_641bqf.css';
import '../../css/d/dexqwyboi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="ni_641bqf"/><path class="dexqwyboi"/></g>`,
		"fallback": "keyline-icons:truck-sharp-duotone",
	});
}

export default Component;

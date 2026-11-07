import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l6e-nzb0i.css';
import '../../css/g/gw5fgab7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l6e-nzb0i"/><path class="gw5fgab7p"/></g>`,
		"fallback": "solar:letter-line-duotone",
	});
}

export default Component;

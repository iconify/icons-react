import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/g/gg6s93b-x.css';
import '../../css/a/admj65bfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="gg6s93b-x"/><path class="admj65bfr"/></g>`,
		"fallback": "solar:sim-card-line-duotone",
	});
}

export default Component;

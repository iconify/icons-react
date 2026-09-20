import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/shw21hz9g.css';
import '../../css/g/g69db1bsk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="shw21hz9g"/><path class="g69db1bsk"/></g>`,
		"fallback": "solar:link-circle-broken",
	});
}

export default Component;

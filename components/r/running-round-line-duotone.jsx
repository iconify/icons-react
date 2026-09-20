import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/lk387obkc.css';
import '../../css/o/ojeiq7bkf.css';
import '../../css/v/vrkxz3m8f.css';
import '../../css/a/apmotxbik.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="lk387obkc"/><path class="ojeiq7bkf"/><path class="vrkxz3m8f"/><path class="apmotxbik"/></g>`,
		"fallback": "solar:running-round-line-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/i/ick8o1b-y.css';
import '../../css/d/d1ue3bczq.css';
import '../../css/k/ksw3aymwa.css';
import '../../css/e/e9h1t6b7n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ick8o1b-y"/><path class="d1ue3bczq"/><path class="ksw3aymwa"/><path class="e9h1t6b7n"/></g>`,
		"fallback": "solar:lamp-line-duotone",
	});
}

export default Component;

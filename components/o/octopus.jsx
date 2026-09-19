import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/akttfdcoa.css';
import '../../css/a/atmw7hb7t.css';
import '../../css/h/h1wcxz_fz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="akttfdcoa"/><path class="atmw7hb7t"/><path class="h1wcxz_fz"/></g>`,
		"fallback": "hugeicons:octopus",
	});
}

export default Component;

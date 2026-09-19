import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/u/u0c9hej4a.css';
import '../../css/p/pbd07ubhl.css';
import '../../css/h/hyww7bdrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="u0c9hej4a"/><path class="pbd07ubhl"/><path class="hyww7bdrb"/></g>`,
		"fallback": "hugeicons:submerge",
	});
}

export default Component;

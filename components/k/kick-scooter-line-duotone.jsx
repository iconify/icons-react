import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/f/f9qmqlbpl.css';
import '../../css/w/whchebbjm.css';
import '../../css/i/iyj-0ob5o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="f9qmqlbpl"/><path class="whchebbjm"/><path class="iyj-0ob5o"/></g>`,
		"fallback": "solar:kick-scooter-line-duotone",
	});
}

export default Component;

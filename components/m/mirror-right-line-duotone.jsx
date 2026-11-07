import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/o/ov13xzbwz.css';
import '../../css/j/jh6mgrb4y.css';
import '../../css/c/cipdabcte.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ov13xzbwz"/><path class="jh6mgrb4y"/><path class="cipdabcte"/></g>`,
		"fallback": "solar:mirror-right-line-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sc-ztr_yu.css';
import '../../css/q/q2b-y-cmq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sc-ztr_yu"/><path class="q2b-y-cmq"/></g>`,
		"fallback": "solar:panels-bottom-left-line-duotone",
	});
}

export default Component;

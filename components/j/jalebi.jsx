import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/buwdhmbcr.css';
import '../../css/o/o8z075b6j.css';
import '../../css/k/ka_9jsbhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="buwdhmbcr wm-shadow"/><path class="o8z075b6j wm-shadow"/><path class="ka_9jsbhm"/></g>`,
		"fallback": "withicons-brutal:jalebi",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t-8oj-bac.css';
import '../../css/g/g-ytzzxpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t-8oj-bac"/><path class="g-ytzzxpl"/></g>`,
		"fallback": "iconamoon:shopping-card",
	});
}

export default Component;

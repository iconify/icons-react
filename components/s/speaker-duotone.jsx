import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nl2hzeuwi.css';
import '../../css/i/izgihgrip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nl2hzeuwi secondary"/><path class="izgihgrip primary"/></g>`,
		"fallback": "iconaut:speaker-duotone",
	});
}

export default Component;

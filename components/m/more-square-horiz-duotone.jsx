import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/auo6f96jh.css';
import '../../css/f/fn7hl3b8l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="auo6f96jh"/><path class="fn7hl3b8l"/></g>`,
		"fallback": "si:more-square-horiz-duotone",
	});
}

export default Component;

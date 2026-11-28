import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j57isbboa.css';
import '../../css/v/vm03vac_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j57isbboa secondary"/><path class="primary vm03vac_p"/></g>`,
		"fallback": "iconaut:vials-duotone",
	});
}

export default Component;

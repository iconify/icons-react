import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s0c83fqjx.css';
import '../../css/n/ntpkhsony.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s0c83fqjx secondary"/><path class="ntpkhsony primary"/></g>`,
		"fallback": "iconaut:skip-forward-duotone",
	});
}

export default Component;

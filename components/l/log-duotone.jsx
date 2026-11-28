import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bbickab8s.css';
import '../../css/o/o6obvybhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bbickab8s secondary"/><path class="o6obvybhm primary"/></g>`,
		"fallback": "iconaut:log-duotone",
	});
}

export default Component;

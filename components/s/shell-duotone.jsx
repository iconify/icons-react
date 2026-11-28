import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u2kyeob6s.css';
import '../../css/e/eepufjm6l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary u2kyeob6s"/><path class="eepufjm6l primary"/></g>`,
		"fallback": "iconaut:shell-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m8lr1uboo.css';
import '../../css/o/o9qagw5yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="m8lr1uboo"/><path clip-rule="evenodd" class="o9qagw5yu"/></g>`,
		"fallback": "reicon:thermometer",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tlk8kjjwg.css';
import '../../css/v/v4p57cizq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tlk8kjjwg"/><path clip-rule="evenodd" class="v4p57cizq"/></g>`,
		"fallback": "reicon:message-plus",
	});
}

export default Component;

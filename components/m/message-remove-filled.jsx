import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xxas_d02i.css';
import '../../css/p/p42cj6b-y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xxas_d02i"/><path class="p42cj6b-y"/></g>`,
		"fallback": "reicon:message-remove-filled",
	});
}

export default Component;

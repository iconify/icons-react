import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ibwfhlf7r.css';
import '../../css/d/dpj9lipxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ibwfhlf7r secondary"/><path class="dpj9lipxa primary"/></g>`,
		"fallback": "iconaut:point-down-duotone",
	});
}

export default Component;

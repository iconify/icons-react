import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wruywg-vy.css';
import '../../css/b/bvjck1u0k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wruywg-vy"/><path class="bvjck1u0k"/></g>`,
		"fallback": "si:play-previous-duotone",
	});
}

export default Component;

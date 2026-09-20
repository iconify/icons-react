import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fw9lkt-kl.css';
import '../../css/w/wn9f8e9gp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fw9lkt-kl"/><path class="wn9f8e9gp"/></g>`,
		"fallback": "si:keypad-duotone",
	});
}

export default Component;

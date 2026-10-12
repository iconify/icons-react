import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a8-groq4k.css';
import '../../css/o/o6zlp80wl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a8-groq4k"/><path class="o6zlp80wl"/></g>`,
		"fallback": "andrsrxn:layer-down",
	});
}

export default Component;

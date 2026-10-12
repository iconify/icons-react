import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s4zjkd5_z.css';
import '../../css/l/l3fb3pp0h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s4zjkd5_z"/><path class="l3fb3pp0h"/></g>`,
		"fallback": "andrsrxn:quotes-up",
	});
}

export default Component;

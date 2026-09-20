import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wc_tf6b1e.css';
import '../../css/f/f2b0kpbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="wc_tf6b1e"/><path class="f2b0kpbem"/></g>`,
		"fallback": "si:notifications-alt-2-duotone",
	});
}

export default Component;

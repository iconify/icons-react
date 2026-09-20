import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k-n6ml35u.css';
import '../../css/a/a20l4-bfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k-n6ml35u"/><path class="a20l4-bfz"/></g>`,
		"fallback": "si:notifications-thick-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pi4-631ad.css';
import '../../css/a/adnmr7cpp.css';
import '../../css/u/uixwofb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="pi4-631ad"/><path clip-rule="evenodd" class="adnmr7cpp"/><path class="uixwofb9z"/></g>`,
		"fallback": "si:user-alt-6-duotone",
	});
}

export default Component;

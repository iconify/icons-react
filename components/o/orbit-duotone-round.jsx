import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/s-8rm4p_y.css';
import '../../css/u/uie8-ybok.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="s-8rm4p_y"/><path class="uie8-ybok"/></g>`,
		"fallback": "coolicons:orbit-duotone-round",
	});
}

export default Component;

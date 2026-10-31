import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvl0mcbmg.css';
import '../../css/e/emncae9uh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="mvl0mcbmg"/><path class="emncae9uh"/></g>`,
		"fallback": "coolicons:plane-duotone-round",
	});
}

export default Component;

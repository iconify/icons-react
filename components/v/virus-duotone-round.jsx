import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6nu0hlfz.css';
import '../../css/q/q91idrbem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b6nu0hlfz"/><path class="q91idrbem"/></g>`,
		"fallback": "coolicons:virus-duotone-round",
	});
}

export default Component;

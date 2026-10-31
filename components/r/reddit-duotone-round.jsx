import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncjjet46h.css';
import '../../css/i/i-7ssyblh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncjjet46h"/><path class="i-7ssyblh"/></g>`,
		"fallback": "coolicons:reddit-duotone-round",
	});
}

export default Component;

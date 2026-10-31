import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/veolxhbmk.css';
import '../../css/e/e6rfuqb0n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="veolxhbmk"/><path class="e6rfuqb0n"/></g>`,
		"fallback": "coolicons:pin-off-duotone-round",
	});
}

export default Component;

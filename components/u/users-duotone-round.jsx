import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ajs1cvb5o.css';
import '../../css/u/u82rn6bxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ajs1cvb5o"/><path class="u82rn6bxk"/></g>`,
		"fallback": "coolicons:users-duotone-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l7ux1bcwo.css';
import '../../css/b/brsegwbww.css';
import '../../css/d/djuzueg0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="l7ux1bcwo"/><path class="brsegwbww"/><path class="djuzueg0d"/></g>`,
		"fallback": "lets-icons:sort-list-alt",
	});
}

export default Component;

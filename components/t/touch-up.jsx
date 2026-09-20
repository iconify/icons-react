import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/prhiofa6v.css';
import '../../css/i/i0uj34b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="prhiofa6v"/><path class="i0uj34b7m"/></g>`,
		"fallback": "streamline-ultimate-color:touch-up",
	});
}

export default Component;

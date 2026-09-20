import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e9wb0xb1s.css';
import '../../css/x/x2m0q9rbd.css';
import '../../css/x/xna3a80qz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e9wb0xb1s"/><path class="x2m0q9rbd"/><path class="xna3a80qz"/></g>`,
		"fallback": "streamline-cyber-color:laptop-2",
	});
}

export default Component;

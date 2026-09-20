import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e3_oz-b2p.css';
import '../../css/u/ubbnb7bgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e3_oz-b2p"/><path class="ubbnb7bgk"/></g>`,
		"fallback": "si:star-duotone",
	});
}

export default Component;

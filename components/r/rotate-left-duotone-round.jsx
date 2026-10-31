import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c8sd11-rw.css';
import '../../css/h/h-qgycbog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c8sd11-rw"/><path class="h-qgycbog"/></g>`,
		"fallback": "coolicons:rotate-left-duotone-round",
	});
}

export default Component;

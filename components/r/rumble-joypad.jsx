import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rbl771qbk.css';
import '../../css/y/yau0o770t.css';
import '../../css/n/nepmxib9s.css';
import '../../css/p/pvotfl8ci.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><g clip-path="url(#SVGDMFyGe9Y)" class="cuyn6tgcc"><path class="rbl771qbk"/><path clip-rule="evenodd" class="yau0o770t"/><path class="nepmxib9s"/></g><defs><clipPath id="SVGDMFyGe9Y"><path class="pvotfl8ci"/></clipPath></defs></g>`,
		"fallback": "at-icons:rumble-joypad",
	});
}

export default Component;

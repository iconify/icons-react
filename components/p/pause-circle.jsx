import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pcb8zqbpp.css';
import '../../css/v/vy093ab6m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="pcb8zqbpp"/><path clip-rule="evenodd" class="vy093ab6m"/></g>`,
		"fallback": "glyphs-poly:pause-circle",
	});
}

export default Component;

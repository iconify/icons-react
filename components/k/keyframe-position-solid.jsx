import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-l1pd0_w.css';
import '../../css/a/azb1ncboz.css';
import '../../css/f/fp5esnbwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h-l1pd0_w"><path clip-rule="evenodd" class="azb1ncboz"/><path class="fp5esnbwi"/></g>`,
		"fallback": "iconoir:keyframe-position-solid",
	});
}

export default Component;

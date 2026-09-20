import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/atxr1vbob.css';
import '../../css/p/p2arf2q8d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="atxr1vbob"/><path clip-rule="evenodd" class="p2arf2q8d"/></g>`,
		"fallback": "streamline-color:octopus-flat",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hjhf7n6tp.css';
import '../../css/g/gcjepnzsc.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hjhf7n6tp"/><path clip-rule="evenodd" class="gcjepnzsc"/></g>`,
		"fallback": "streamline-flex-color:steps-2-flat",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/j85x09k-h.css';
import '../../css/d/dw69-3bge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="j85x09k-h"/><path class="dw69-3bge"/></g>`,
		"fallback": "lucide:mountain-snow",
	});
}

export default Component;

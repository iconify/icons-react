import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l9dhmtbsb.css';
import '../../css/i/i8t26pb6w.css';
import '../../css/j/jhicv9b5n.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="l9dhmtbsb"/><path class="i8t26pb6w"/><path clip-rule="evenodd" class="jhicv9b5n"/></g>`,
		"fallback": "streamline-flex-color:pen-tool-flat",
	});
}

export default Component;

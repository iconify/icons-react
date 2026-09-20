import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j_9omrixo.css';
import '../../css/q/qjtsk5bsg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j_9omrixo"/><path class="qjtsk5bsg"/></g>`,
		"fallback": "streamline-flex-color:pet-paw",
	});
}

export default Component;

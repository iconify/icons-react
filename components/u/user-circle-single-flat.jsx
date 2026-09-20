import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ep7outb8s.css';
import '../../css/i/i_6dijbiv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ep7outb8s"/><path clip-rule="evenodd" class="i_6dijbiv"/></g>`,
		"fallback": "streamline-flex-color:user-circle-single-flat",
	});
}

export default Component;

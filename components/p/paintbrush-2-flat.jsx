import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h43p-n4ns.css';
import '../../css/n/n2c48yb_e.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="h43p-n4ns"/><path class="n2c48yb_e"/></g>`,
		"fallback": "streamline-flex-color:paintbrush-2-flat",
	});
}

export default Component;

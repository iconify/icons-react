import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jtowsomii.css';
import '../../css/d/dem5xxbcs.css';
import '../../css/o/o22ei45em.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(3 3)" class="jtowsomii"><path class="dem5xxbcs"/><circle class="o22ei45em"/></g>`,
		"fallback": "system-uicons:settings",
	});
}

export default Component;

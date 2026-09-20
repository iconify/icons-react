import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cwirq6zya.css';
import '../../css/z/zvemx2bxt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cwirq6zya"/><path class="zvemx2bxt"/></g>`,
		"fallback": "streamline-flex-color:round-anchor-point",
	});
}

export default Component;

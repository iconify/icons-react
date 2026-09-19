import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/p6dtekbfi.css';
import '../../css/l/l09knwqsa.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="p6dtekbfi"/><path class="l09knwqsa"/></g>`,
		"fallback": "cryptocurrency-color:vib",
	});
}

export default Component;

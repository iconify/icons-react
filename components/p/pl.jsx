import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/neymbdbaf.css';
import '../../css/p/p14c00v9b.css';

const viewBox = {"width":301,"height":189};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="neymbdbaf"/><path class="p14c00v9b"/></g>`,
		"fallback": "cif:pl",
	});
}

export default Component;

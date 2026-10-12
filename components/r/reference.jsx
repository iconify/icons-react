import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f92e-r8sw.css';
import '../../css/s/s856plv7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f92e-r8sw"/><path class="s856plv7w"/></g>`,
		"fallback": "andrsrxn:reference",
	});
}

export default Component;

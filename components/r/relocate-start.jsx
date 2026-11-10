import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0vv-ob-t.css';
import '../../css/j/jz7g82l-l.css';
import '../../css/t/tkr0xi29k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z0vv-ob-t"/><path class="jz7g82l-l"/><path class="tkr0xi29k"/></g>`,
		"fallback": "andrsrxn:relocate-start",
	});
}

export default Component;

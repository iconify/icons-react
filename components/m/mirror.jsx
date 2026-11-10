import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/ax9a68bul.css';
import '../../css/j/j-6rpcc6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ax9a68bul"/><path class="j-6rpcc6m"/></g>`,
		"fallback": "andrsrxn:mirror",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/d7_0xz__t.css';
import '../../css/j/jtqza1bht.css';
import '../../css/a/a142pul9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="d7_0xz__t"/><path class="jtqza1bht"/><path clip-rule="evenodd" class="a142pul9z"/></g>`,
		"fallback": "andrsrxn:user-scan",
	});
}

export default Component;

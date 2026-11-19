import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/uhvdxdbfy.css';
import '../../css/j/jk79t-31r.css';
import '../../css/k/kydwtob6i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="uhvdxdbfy"/><path class="jk79t-31r"/><path class="kydwtob6i"/></g>`,
		"fallback": "andrsrxn:sim-card-check",
	});
}

export default Component;

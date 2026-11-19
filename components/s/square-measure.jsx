import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t1if97brk.css';
import '../../css/e/ekzl7cb7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="t1if97brk"/><path class="ekzl7cb7y"/></g>`,
		"fallback": "andrsrxn:square-measure",
	});
}

export default Component;

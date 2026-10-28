import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rvlei0grt.css';
import '../../css/n/nuggr0bhp.css';
import '../../css/j/jpordbbij.css';
import '../../css/w/w9su38bli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="rvlei0grt"/><path class="nuggr0bhp"/><circle class="jpordbbij"/><circle class="w9su38bli"/></g>`,
		"fallback": "andrsrxn:logic-not",
	});
}

export default Component;

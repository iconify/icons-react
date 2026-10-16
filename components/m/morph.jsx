import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b6ynxgbsy.css';
import '../../css/j/j7x9chb1h.css';
import '../../css/x/x8m2etbbb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b6ynxgbsy"/><path class="j7x9chb1h"/><path class="x8m2etbbb"/></g>`,
		"fallback": "andrsrxn:morph",
	});
}

export default Component;

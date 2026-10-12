import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oxvajo8gq.css';
import '../../css/f/fun3axblo.css';
import '../../css/i/idq2opbvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oxvajo8gq"/><rect class="fun3axblo"/><path class="idq2opbvv"/></g>`,
		"fallback": "andrsrxn:subtract",
	});
}

export default Component;

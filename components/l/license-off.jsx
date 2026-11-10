import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rkg7dwbgh.css';
import '../../css/l/lgkcb-beb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rkg7dwbgh"/><path class="lgkcb-beb"/></g>`,
		"fallback": "andrsrxn:license-off",
	});
}

export default Component;

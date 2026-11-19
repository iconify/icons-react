import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qi1sgnbpy.css';
import '../../css/o/ohfmdab3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qi1sgnbpy"/><path class="ohfmdab3m"/></g>`,
		"fallback": "andrsrxn:utensils",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q488zob5p.css';
import '../../css/y/yhj447i1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q488zob5p"/><path class="yhj447i1w"/></g>`,
		"fallback": "andrsrxn:waves-lightning",
	});
}

export default Component;

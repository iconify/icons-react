import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/d-fru41ev.css';
import '../../css/w/w-_vjnana.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="d-fru41ev"/><path class="w-_vjnana"/></g>`,
		"fallback": "hugeicons:job-share",
	});
}

export default Component;

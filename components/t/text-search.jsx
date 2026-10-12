import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j3v11dbxc.css';
import '../../css/v/vitv9ibhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j3v11dbxc"/><path class="vitv9ibhn"/></g>`,
		"fallback": "andrsrxn:text-search",
	});
}

export default Component;

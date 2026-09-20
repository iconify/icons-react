import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j0y-facjl.css';
import '../../css/o/om1jujyhb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="j0y-facjl"/><path class="om1jujyhb"/></g>`,
		"fallback": "majesticons:phone-ring",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b1bdw5i8b.css';
import '../../css/w/wy79-boxa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="b1bdw5i8b"/><path class="wy79-boxa"/></g>`,
		"fallback": "iconamoon:number-0-duotone",
	});
}

export default Component;

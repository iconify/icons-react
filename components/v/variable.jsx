import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/y/yvrsyibld.css';
import '../../css/e/eugyjyouz.css';
import '../../css/b/bikjqe12u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="wm-shadow yvrsyibld"/><path class="eugyjyouz wm-shadow"/><path class="bikjqe12u"/></g>`,
		"fallback": "withicons-brutal:variable",
	});
}

export default Component;

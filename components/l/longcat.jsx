import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f4ripferm.css';
import '../../css/x/x-l1-u4wm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path clip-rule="evenodd" class="f4ripferm"/><path class="x-l1-u4wm"/></g>`,
		"fallback": "thesvg:longcat",
	});
}

export default Component;

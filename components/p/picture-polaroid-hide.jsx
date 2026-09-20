import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sqp0-ybsk.css';
import '../../css/h/hbdxwwb9u.css';
import '../../css/n/nrthqg0ra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sqp0-ybsk"/><path class="hbdxwwb9u"/><path class="nrthqg0ra"/></g>`,
		"fallback": "streamline-freehand:picture-polaroid-hide",
	});
}

export default Component;

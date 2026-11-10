import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xb8w0mq5z.css';
import '../../css/y/y8dh_gytf.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xb8w0mq5z"/><path class="y8dh_gytf"/></g>`,
		"fallback": "andrsrxn:mirror-left",
	});
}

export default Component;

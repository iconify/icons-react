import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/k/kxk0owo3y.css';
import '../../css/l/l3aq1cc4z.css';
import '../../css/m/mxmgh8byi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="kxk0owo3y"/><path class="l3aq1cc4z wm-a"/><path class="mxmgh8byi wm-s"/></g>`,
		"fallback": "withicons:lotus-solid",
	});
}

export default Component;

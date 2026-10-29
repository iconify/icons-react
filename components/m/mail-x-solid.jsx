import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cn26w5d7r.css';
import '../../css/k/kambsf82d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cn26w5d7r"/><path class="kambsf82d wm-s"/></g>`,
		"fallback": "withicons:mail-x-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cwth7q9qn.css';
import '../../css/l/lfiin6vpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="cwth7q9qn"/><path class="lfiin6vpy wm-s"/></g>`,
		"fallback": "withicons:love-scroll-solid",
	});
}

export default Component;

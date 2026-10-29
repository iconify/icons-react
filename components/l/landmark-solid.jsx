import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/pwhlopbuf.css';
import '../../css/o/ohb74vurv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="pwhlopbuf"/><path class="ohb74vurv wm-a"/></g>`,
		"fallback": "withicons:landmark-solid",
	});
}

export default Component;

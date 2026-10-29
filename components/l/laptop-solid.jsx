import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/s_p-mvbyc.css';
import '../../css/d/dowc8wnds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="s_p-mvbyc"/><path class="dowc8wnds wm-a"/></g>`,
		"fallback": "withicons:laptop-solid",
	});
}

export default Component;

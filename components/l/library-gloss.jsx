import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/z-tkqtn5o.css';
import '../../css/w/wu75qyclc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="wm-k z-tkqtn5o"/><path class="wm-a wu75qyclc"/></g>`,
		"fallback": "withicons:library-gloss",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uh9oejbxr.css';
import '../../css/j/jc1xe6sxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="uh9oejbxr wm-k"/><path class="jc1xe6sxm wm-a"/></g>`,
		"fallback": "withicons:sailboat-gloss",
	});
}

export default Component;

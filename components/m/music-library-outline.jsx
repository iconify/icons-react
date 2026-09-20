import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/b6smy9bgk.css';
import '../../css/e/e_h47wbjh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="b6smy9bgk"/><path class="e_h47wbjh"/></g>`,
		"fallback": "solar:music-library-outline",
	});
}

export default Component;

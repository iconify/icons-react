import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gpg90hbor.css';
import '../../css/p/pds1hmbpr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gpg90hbor"/><path class="pds1hmbpr"/></g>`,
		"fallback": "coolicons:list-ordered-bulk-round",
	});
}

export default Component;

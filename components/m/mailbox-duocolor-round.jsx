import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ld8hjv5zq.css';
import '../../css/u/u4y2h5bxm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ld8hjv5zq"/><path class="u4y2h5bxm"/></g>`,
		"fallback": "coolicons:mailbox-duocolor-round",
	});
}

export default Component;

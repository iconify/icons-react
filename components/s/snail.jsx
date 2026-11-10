import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x5vgy2b_q.css';
import '../../css/k/k3w-1mhgc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="x5vgy2b_q"/><path class="k3w-1mhgc"/></g>`,
		"fallback": "tabler:snail",
	});
}

export default Component;

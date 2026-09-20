import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xaa-5tgmk.css';
import '../../css/j/j0xw9w2pq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="xaa-5tgmk"/><path class="j0xw9w2pq"/></g>`,
		"fallback": "keyline-icons:rocket-vertical-fill",
	});
}

export default Component;

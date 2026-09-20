import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z67njvx5t.css';
import '../../css/w/w85hymh_x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z67njvx5t"/><path class="w85hymh_x"/></g>`,
		"fallback": "tabler:piano",
	});
}

export default Component;

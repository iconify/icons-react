import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gu1oc3zff.css';
import '../../css/c/cpzbldb8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gu1oc3zff"/><path class="cpzbldb8z"/></g>`,
		"fallback": "nrk:open-external-expressive",
	});
}

export default Component;

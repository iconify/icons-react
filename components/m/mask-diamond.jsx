import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uecvdccph.css';
import '../../css/e/e_1zdybmy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uecvdccph"/><path class="e_1zdybmy"/></g>`,
		"fallback": "streamline-freehand:mask-diamond",
	});
}

export default Component;

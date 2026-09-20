import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c-d1wdduk.css';
import '../../css/t/t4-ece_0x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="c-d1wdduk"/><path class="t4-ece_0x"/></g>`,
		"fallback": "majesticons:lock",
	});
}

export default Component;

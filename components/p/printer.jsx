import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/anhkjmhdr.css';
import '../../css/o/owa8ozb7p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="anhkjmhdr"/><path clip-rule="evenodd" class="owa8ozb7p"/></g>`,
		"fallback": "nrk:printer",
	});
}

export default Component;

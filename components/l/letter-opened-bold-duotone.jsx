import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/krd4vytvh.css';
import '../../css/r/rocr9vb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="krd4vytvh"/><path class="rocr9vb1i"/></g>`,
		"fallback": "solar:letter-opened-bold-duotone",
	});
}

export default Component;

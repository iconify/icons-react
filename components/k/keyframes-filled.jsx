import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/lmui5qsxg.css';
import '../../css/i/i1pwypbyk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="lmui5qsxg"/><path class="i1pwypbyk"/></g>`,
		"fallback": "tabler:keyframes-filled",
	});
}

export default Component;

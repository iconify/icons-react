import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xjsxquqvi.css';
import '../../css/m/mwhsxubtm.css';
import '../../css/k/klks94x8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xjsxquqvi"/><path class="mwhsxubtm"/><path class="klks94x8h"/></g>`,
		"fallback": "solar:palette-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/m5ap_-bph.css';
import '../../css/l/l5dsk-k8i.css';
import '../../css/g/gxlkwcb0z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="m5ap_-bph"/><path clip-rule="evenodd" class="l5dsk-k8i"/><path class="gxlkwcb0z"/></g>`,
		"fallback": "healthicons:nervous-outline-24px",
	});
}

export default Component;

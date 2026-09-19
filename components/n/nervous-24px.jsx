import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/l5dsk-k8i.css';
import '../../css/u/u2sn6fb9r.css';
import '../../css/m/m5ap_-bph.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="l5dsk-k8i"/><path class="u2sn6fb9r"/><path clip-rule="evenodd" class="m5ap_-bph"/></g>`,
		"fallback": "healthicons:nervous-24px",
	});
}

export default Component;

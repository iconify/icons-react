import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sf2uf-b4k.css';
import '../../css/s/s7mi6l72v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="sf2uf-b4k"/><path class="s7mi6l72v"/></g>`,
		"fallback": "coolicons:orbit-bulk-round",
	});
}

export default Component;

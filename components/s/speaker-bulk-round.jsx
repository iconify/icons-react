import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z-5yhbcwi.css';
import '../../css/r/ri72sacri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="z-5yhbcwi"/><path class="ri72sacri"/></g>`,
		"fallback": "coolicons:speaker-bulk-round",
	});
}

export default Component;

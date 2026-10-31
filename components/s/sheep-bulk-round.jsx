import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dvibibz6h.css';
import '../../css/v/vfitpdb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dvibibz6h"/><path class="vfitpdb6h"/></g>`,
		"fallback": "coolicons:sheep-bulk-round",
	});
}

export default Component;

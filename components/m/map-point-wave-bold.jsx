import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bj-g7o-5h.css';
import '../../css/f/fivqrlb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bj-g7o-5h"/><path clip-rule="evenodd" class="fivqrlb2w"/></g>`,
		"fallback": "solar:map-point-wave-bold",
	});
}

export default Component;

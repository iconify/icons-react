import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u4-7xab_r.css';
import '../../css/i/ivhw0f21u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="u4-7xab_r"/><path class="ivhw0f21u"/></g>`,
		"fallback": "solar:mirror-left-bold",
	});
}

export default Component;

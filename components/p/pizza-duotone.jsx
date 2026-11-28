import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z6hr7ga4z.css';
import '../../css/s/s_f_hkq7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary z6hr7ga4z"/><path class="primary s_f_hkq7e"/></g>`,
		"fallback": "iconaut:pizza-duotone",
	});
}

export default Component;

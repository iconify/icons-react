import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z68r_q9qj.css';
import '../../css/w/wl_boz-jd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary z68r_q9qj"/><path class="primary wl_boz-jd"/></g>`,
		"fallback": "iconaut:share-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/mzht2dbcv.css';
import '../../css/u/uuk5mioug.css';
import '../../css/z/zj_cxhvxk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="mzht2dbcv"/><path class="uuk5mioug"/><path class="zj_cxhvxk"/></g>`,
		"fallback": "solar:round-double-alt-arrow-left-bold-duotone",
	});
}

export default Component;

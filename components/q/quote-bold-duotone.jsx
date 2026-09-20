import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rthx_5b9m.css';
import '../../css/z/zsx_qjbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rthx_5b9m"/><path class="zsx_qjbjw"/></g>`,
		"fallback": "solar:quote-bold-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/suj-y8rtn.css';
import '../../css/y/ykw7tgbzh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="suj-y8rtn"/><path class="ykw7tgbzh"/></g>`,
		"fallback": "solar:map-arrow-left-bold-duotone",
	});
}

export default Component;

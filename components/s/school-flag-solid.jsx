import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j8ve66bgv.css';
import '../../css/l/lry_rwbpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="j8ve66bgv"/><path class="lry_rwbpy"/></g>`,
		"fallback": "flowbite:school-flag-solid",
	});
}

export default Component;

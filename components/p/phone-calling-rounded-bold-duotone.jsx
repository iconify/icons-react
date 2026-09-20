import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j91-b1bhj.css';
import '../../css/c/cfifa2ueo.css';
import '../../css/h/hub4u5b3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j91-b1bhj"/><path class="cfifa2ueo"/><path clip-rule="evenodd" class="hub4u5b3j"/></g>`,
		"fallback": "solar:phone-calling-rounded-bold-duotone",
	});
}

export default Component;

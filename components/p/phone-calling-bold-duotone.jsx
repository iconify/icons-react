import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/ro541xb1r.css';
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
		"content": `<g class="cuyn6tgcc"><path class="ro541xb1r"/><path class="cfifa2ueo"/><path clip-rule="evenodd" class="hub4u5b3j"/></g>`,
		"fallback": "solar:phone-calling-bold-duotone",
	});
}

export default Component;

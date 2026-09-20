import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/owjmjfw0k.css';
import '../../css/i/ice63qb1t.css';
import '../../css/c/c_zdt_bqs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="owjmjfw0k"/><path class="ice63qb1t"/><path class="c_zdt_bqs"/></g>`,
		"fallback": "solar:user-check-rounded-bold",
	});
}

export default Component;

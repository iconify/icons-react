import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t9olzz3pl.css';
import '../../css/i/ijeaupbvl.css';

const viewBox = {"width":24,"height":24,"left":-4,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="t9olzz3pl"/><path class="ijeaupbvl"/></g>`,
		"fallback": "jam:paypal",
	});
}

export default Component;

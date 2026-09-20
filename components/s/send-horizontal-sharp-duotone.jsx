import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/m/ml9i6q40p.css';
import '../../css/z/z99xt2byy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ml9i6q40p"/><path class="z99xt2byy"/></g>`,
		"fallback": "keyline-icons:send-horizontal-sharp-duotone",
	});
}

export default Component;

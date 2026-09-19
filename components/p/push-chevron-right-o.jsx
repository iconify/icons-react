import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/itbqc-y_s.css';
import '../../css/m/mwpdgbc8j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="itbqc-y_s"/><path clip-rule="evenodd" class="mwpdgbc8j"/></g>`,
		"fallback": "gg:push-chevron-right-o",
	});
}

export default Component;

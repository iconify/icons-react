import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_hsi1jip.css';
import '../../css/b/bi4rrpguj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary v_hsi1jip"/><path class="bi4rrpguj primary"/></g>`,
		"fallback": "iconaut:lock-keyhole-open-duotone",
	});
}

export default Component;

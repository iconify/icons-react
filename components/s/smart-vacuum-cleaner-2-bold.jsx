import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vm76-2buh.css';
import '../../css/u/u8wwqz-yz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vm76-2buh"/><path clip-rule="evenodd" class="u8wwqz-yz"/></g>`,
		"fallback": "solar:smart-vacuum-cleaner-2-bold",
	});
}

export default Component;

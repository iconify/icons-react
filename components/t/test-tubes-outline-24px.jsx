import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p75v-qlaa.css';
import '../../css/c/cgpniebhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p75v-qlaa"/><path clip-rule="evenodd" class="cgpniebhf"/></g>`,
		"fallback": "healthicons:test-tubes-outline-24px",
	});
}

export default Component;

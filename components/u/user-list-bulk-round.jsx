import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ig83ifhpq.css';
import '../../css/g/ggj85kb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ig83ifhpq"/><path class="ggj85kb8w"/></g>`,
		"fallback": "coolicons:user-list-bulk-round",
	});
}

export default Component;

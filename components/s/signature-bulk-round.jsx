import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xpsyq_t_e.css';
import '../../css/o/ok0p-sb6w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xpsyq_t_e"/><path class="ok0p-sb6w"/></g>`,
		"fallback": "coolicons:signature-bulk-round",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nvvsnnb_o.css';
import '../../css/e/enxxndbpb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nvvsnnb_o"/><path class="enxxndbpb"/></g>`,
		"fallback": "pixelarticons:waves-arrow-down",
	});
}

export default Component;

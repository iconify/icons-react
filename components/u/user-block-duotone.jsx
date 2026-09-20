import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/h9kqrfbgx.css';
import '../../css/i/iof_a_26r.css';
import '../../css/x/xs_sbwbww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="h9kqrfbgx"/><path clip-rule="evenodd" class="iof_a_26r"/><path class="xs_sbwbww"/></g>`,
		"fallback": "reicon:user-block-duotone",
	});
}

export default Component;

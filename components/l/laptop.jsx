import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qv0wpdbqb.css';
import '../../css/t/t7e_x5b-z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="qv0wpdbqb"/><path class="t7e_x5b-z"/></g>`,
		"fallback": "gg:laptop",
	});
}

export default Component;

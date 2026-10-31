import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/ppeuxsbjl.css';
import '../../css/a/a8m2j0-br.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ppeuxsbjl"/><path class="a8m2j0-br"/></g>`,
		"fallback": "coolicons:log-out-bulk-round",
	});
}

export default Component;

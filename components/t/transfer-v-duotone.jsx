import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/olnuhl_ps.css';
import '../../css/l/ltpzc-zlq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="olnuhl_ps"/><path class="ltpzc-zlq"/></g>`,
		"fallback": "reicon:transfer-v-duotone",
	});
}

export default Component;

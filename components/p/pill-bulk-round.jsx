import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fohqncbib.css';
import '../../css/m/mh1v9pjbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fohqncbib"/><path class="mh1v9pjbx"/></g>`,
		"fallback": "coolicons:pill-bulk-round",
	});
}

export default Component;

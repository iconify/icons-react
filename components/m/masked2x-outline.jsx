import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fjv3yr_cl.css';
import '../../css/e/e_m9s3bio.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fjv3yr_cl"/><path clip-rule="evenodd" class="e_m9s3bio"/></g>`,
		"fallback": "healthicons:masked2x-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/baoulvu-a.css';
import '../../css/e/e3_pd95nd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="baoulvu-a"/><path class="e3_pd95nd"/></g>`,
		"fallback": "healthicons:lungs-outline-24px",
	});
}

export default Component;

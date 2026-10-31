import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zjfit0btt.css';
import '../../css/c/cv-xifokp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zjfit0btt"/><path class="cv-xifokp"/></g>`,
		"fallback": "coolicons:route-bulk-round",
	});
}

export default Component;

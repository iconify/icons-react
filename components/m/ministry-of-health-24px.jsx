import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/awo9nubsy.css';
import '../../css/g/glucy-yvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="awo9nubsy"/><path class="glucy-yvp"/></g>`,
		"fallback": "healthicons:ministry-of-health-24px",
	});
}

export default Component;

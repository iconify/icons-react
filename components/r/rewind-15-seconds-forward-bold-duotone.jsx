import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/ds0znlb8s.css';
import '../../css/t/tcec7mbfa.css';
import '../../css/t/tjh65cbaa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ds0znlb8s"/><path class="tcec7mbfa"/><path clip-rule="evenodd" class="tjh65cbaa"/></g>`,
		"fallback": "solar:rewind-15-seconds-forward-bold-duotone",
	});
}

export default Component;

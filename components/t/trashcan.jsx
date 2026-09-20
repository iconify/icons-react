import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nn93tzbwi.css';
import '../../css/k/kveslos6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nn93tzbwi"/><path clip-rule="evenodd" class="kveslos6a"/></g>`,
		"fallback": "nrk:trashcan",
	});
}

export default Component;

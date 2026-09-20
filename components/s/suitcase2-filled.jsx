import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zm185m6qh.css';
import '../../css/k/k-743dbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="zm185m6qh"/><path class="k-743dbgy"/></g>`,
		"fallback": "reicon:suitcase2-filled",
	});
}

export default Component;

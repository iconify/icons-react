import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/n2t8j6bes.css';
import '../../css/p/phqgcjkku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="n2t8j6bes"/><path clip-rule="evenodd" class="phqgcjkku"/></g>`,
		"fallback": "nrk:rectangle-contract-expressive",
	});
}

export default Component;

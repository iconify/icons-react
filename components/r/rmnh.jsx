import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nldomubfm.css';
import '../../css/k/kkesx9btg.css';
import '../../css/b/bwz--2-hu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="nldomubfm"/><path clip-rule="evenodd" class="kkesx9btg"/><path class="bwz--2-hu"/></g>`,
		"fallback": "healthicons:rmnh",
	});
}

export default Component;

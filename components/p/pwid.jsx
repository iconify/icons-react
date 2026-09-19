import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/t89nnm9vz.css';
import '../../css/k/kzmn4ki6n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="t89nnm9vz"/><path class="kzmn4ki6n"/></g>`,
		"fallback": "healthicons:pwid",
	});
}

export default Component;

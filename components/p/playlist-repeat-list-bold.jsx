import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k4kr7db0h.css';
import '../../css/j/jor_1ib2e.css';
import '../../css/t/tdirdccsl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k4kr7db0h"><path class="jor_1ib2e"/><path class="tdirdccsl"/></g>`,
		"fallback": "iconamoon:playlist-repeat-list-bold",
	});
}

export default Component;

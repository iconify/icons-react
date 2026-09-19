import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
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
		"content": `<g class="to0c2ub7t"><path class="jor_1ib2e"/><path class="tdirdccsl"/></g>`,
		"fallback": "iconamoon:playlist-repeat-list-duotone",
	});
}

export default Component;

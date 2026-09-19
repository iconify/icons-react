import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
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
		"content": `<g class="ipq1z-bjh"><path class="jor_1ib2e"/><path class="tdirdccsl"/></g>`,
		"fallback": "iconamoon:playlist-repeat-list-light",
	});
}

export default Component;

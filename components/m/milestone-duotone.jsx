import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/asrin8brh.css';
import '../../css/l/ltkyf93jq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="asrin8brh secondary"/><path class="ltkyf93jq primary"/></g>`,
		"fallback": "iconaut:milestone-duotone",
	});
}

export default Component;

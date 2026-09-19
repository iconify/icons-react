import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jk67zb97v.css';
import '../../css/j/jf836tbtl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jk67zb97v"/><path clip-rule="evenodd" class="jf836tbtl"/></g>`,
		"fallback": "gg:trello",
	});
}

export default Component;

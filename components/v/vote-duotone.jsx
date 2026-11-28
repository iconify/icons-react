import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jw08mkbxh.css';
import '../../css/u/ui4pb4lvp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="jw08mkbxh secondary"/><path class="primary ui4pb4lvp"/></g>`,
		"fallback": "iconaut:vote-duotone",
	});
}

export default Component;

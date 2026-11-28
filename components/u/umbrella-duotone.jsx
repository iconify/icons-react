import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/d77qqgmbs.css';
import '../../css/v/v9b3g0b3k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="d77qqgmbs secondary"/><path class="primary v9b3g0b3k"/></g>`,
		"fallback": "iconaut:umbrella-duotone",
	});
}

export default Component;

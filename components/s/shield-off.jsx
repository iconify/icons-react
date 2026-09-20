import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/agwnjn28l.css';
import '../../css/e/e9h90ubcl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="agwnjn28l"/><path clip-rule="evenodd" class="e9h90ubcl"/></g>`,
		"fallback": "reicon:shield-off",
	});
}

export default Component;

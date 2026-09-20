import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/s9k9wcuwf.css';
import '../../css/a/ajb0jwbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="s9k9wcuwf"/><path clip-rule="evenodd" class="ajb0jwbag"/></g>`,
		"fallback": "solar:meditation-bold",
	});
}

export default Component;

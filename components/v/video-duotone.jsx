import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o8mc91exm.css';
import '../../css/y/yza9t7b9u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o8mc91exm secondary"/><path class="primary yza9t7b9u"/></g>`,
		"fallback": "iconaut:video-duotone",
	});
}

export default Component;

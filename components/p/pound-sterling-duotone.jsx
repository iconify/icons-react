import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zqs495oaj.css';
import '../../css/v/vez64yzku.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary zqs495oaj"/><path class="primary vez64yzku"/></g>`,
		"fallback": "iconaut:pound-sterling-duotone",
	});
}

export default Component;

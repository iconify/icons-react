import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dqto8l41n.css';
import '../../css/t/tlcdoq-_i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dqto8l41n secondary"/><path class="primary tlcdoq-_i"/></g>`,
		"fallback": "iconaut:watermelon-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tt0kg8tlt.css';
import '../../css/u/u6edw99nn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tt0kg8tlt"/><path clip-rule="evenodd" class="u6edw99nn"/></g>`,
		"fallback": "healthicons:poison-outline-24px",
	});
}

export default Component;

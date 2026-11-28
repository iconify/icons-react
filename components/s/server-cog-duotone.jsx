import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rlql_bcss.css';
import '../../css/t/t15hzlfqj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rlql_bcss secondary"/><path class="primary t15hzlfqj"/></g>`,
		"fallback": "iconaut:server-cog-duotone",
	});
}

export default Component;

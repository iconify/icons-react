import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ey4677bgx.css';
import '../../css/o/oidse6wjy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ey4677bgx"/><path class="oidse6wjy"/></g>`,
		"fallback": "coolicons:wavy-help-bulk-round",
	});
}

export default Component;

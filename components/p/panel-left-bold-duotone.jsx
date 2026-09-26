import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/soea2lqze.css';
import '../../css/q/qimuahb6f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="soea2lqze"/><path class="qimuahb6f"/></g>`,
		"fallback": "solar:panel-left-bold-duotone",
	});
}

export default Component;

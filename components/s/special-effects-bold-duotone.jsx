import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y6-b8lbmz.css';
import '../../css/q/q2crmrsdk.css';
import '../../css/q/qsf2jobvz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y6-b8lbmz"/><path class="q2crmrsdk"/><path class="qsf2jobvz"/></g>`,
		"fallback": "solar:special-effects-bold-duotone",
	});
}

export default Component;

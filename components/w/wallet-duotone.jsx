import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/oyjujgd1y.css';
import '../../css/v/vdgi0qbsj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="oyjujgd1y"/><path class="vdgi0qbsj"/></g>`,
		"fallback": "keyline-icons:wallet-duotone",
	});
}

export default Component;

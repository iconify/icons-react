import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q050sk4js.css';
import '../../css/y/yhx8xobnk.css';
import '../../css/u/uu_td6bkc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q050sk4js"/><path class="yhx8xobnk"/><path class="uu_td6bkc"/></g>`,
		"fallback": "lucide-extended:proportions-duotone",
	});
}

export default Component;

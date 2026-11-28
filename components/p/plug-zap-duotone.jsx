import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o4p654bpk.css';
import '../../css/g/gkmwphbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o4p654bpk secondary"/><path class="gkmwphbrj primary"/></g>`,
		"fallback": "iconaut:plug-zap-duotone",
	});
}

export default Component;

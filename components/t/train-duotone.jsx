import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qjkr5o90s.css';
import '../../css/m/my7_2acqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qjkr5o90s secondary"/><path class="my7_2acqw primary"/></g>`,
		"fallback": "iconaut:train-duotone",
	});
}

export default Component;

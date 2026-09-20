import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/y/y3tf-nwmj.css';
import '../../css/f/fy-3l7bym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="y3tf-nwmj"/><path class="fy-3l7bym"/></g>`,
		"fallback": "reicon:save-minus-filled",
	});
}

export default Component;

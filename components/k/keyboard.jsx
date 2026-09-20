import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gt68dy6gx.css';
import '../../css/o/o2xuhfvqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gt68dy6gx"/><path clip-rule="evenodd" class="o2xuhfvqf"/></g>`,
		"fallback": "reicon:keyboard",
	});
}

export default Component;

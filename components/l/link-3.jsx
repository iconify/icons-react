import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dwbj38ems.css';
import '../../css/m/mk2vmx6yi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dwbj38ems"/><path class="mk2vmx6yi"/></g>`,
		"fallback": "reicon:link-3",
	});
}

export default Component;

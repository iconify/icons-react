import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/so60tkyxe.css';
import '../../css/y/ynq-knsnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="so60tkyxe"/><path class="ynq-knsnj"/></g>`,
		"fallback": "reicon:shop3-duotone",
	});
}

export default Component;

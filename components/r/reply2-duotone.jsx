import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6dbk7bgn.css';
import '../../css/v/vzq97mhhn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="c6dbk7bgn"/><path class="vzq97mhhn"/></g>`,
		"fallback": "reicon:reply2-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vua7fz_oe.css';
import '../../css/e/e6jt1rtqv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vua7fz_oe"/><path class="e6jt1rtqv"/></g>`,
		"fallback": "reicon:smart-speaker3-duotone",
	});
}

export default Component;

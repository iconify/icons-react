import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a451r_95b.css';
import '../../css/v/v3chfnb_v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a451r_95b"/><path class="v3chfnb_v"/></g>`,
		"fallback": "griddy-icons:steak",
	});
}

export default Component;

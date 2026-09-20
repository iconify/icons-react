import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/u/ux3j6xbjx.css';
import '../../css/r/rk7vfub3p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="ux3j6xbjx"/><path class="rk7vfub3p"/></g>`,
		"fallback": "lets-icons:road",
	});
}

export default Component;

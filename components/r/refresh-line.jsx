import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/v_56hkcip.css';
import '../../css/m/mvmy_zbzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="v_56hkcip"/><path class="mvmy_zbzt"/></g>`,
		"fallback": "majesticons:refresh-line",
	});
}

export default Component;

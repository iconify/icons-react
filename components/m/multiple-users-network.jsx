import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/y6vs5k_wg.css';
import '../../css/u/u_min57un.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="y6vs5k_wg"/><path class="u_min57un"/></g>`,
		"fallback": "streamline-ultimate:multiple-users-network",
	});
}

export default Component;

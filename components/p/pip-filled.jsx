import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/bzdvjibtc.css';
import '../../css/u/u_p_h_bqw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="bzdvjibtc"/><path class="u_p_h_bqw"/></g>`,
		"fallback": "reicon:pip-filled",
	});
}

export default Component;

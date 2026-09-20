import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xgkb-0bgn.css';
import '../../css/s/sgwhh5y5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xgkb-0bgn"/><circle class="sgwhh5y5w"/></g>`,
		"fallback": "reicon:star-sparkle-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dk_pa_ywq.css';
import '../../css/l/l9xhkkb1y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dk_pa_ywq"/><path class="l9xhkkb1y"/></g>`,
		"fallback": "reicon:ruler2-duotone",
	});
}

export default Component;

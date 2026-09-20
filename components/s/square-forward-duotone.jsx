import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/ktrplkd2f.css';
import '../../css/o/oiompobzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ktrplkd2f"/><path class="oiompobzt"/></g>`,
		"fallback": "reicon:square-forward-duotone",
	});
}

export default Component;

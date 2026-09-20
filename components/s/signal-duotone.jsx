import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nkty9nmjr.css';
import '../../css/e/e1gg6bbgg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nkty9nmjr"/><path clip-rule="evenodd" class="e1gg6bbgg"/></g>`,
		"fallback": "reicon:signal-duotone",
	});
}

export default Component;

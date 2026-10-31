import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ig2eh8blv.css';
import '../../css/x/xcoe-yb9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ig2eh8blv"/><path class="xcoe-yb9q"/></g>`,
		"fallback": "coolicons:planet-bulk-round",
	});
}

export default Component;

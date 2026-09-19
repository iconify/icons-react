import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pm2abee3d.css';
import '../../css/x/xjy3z5hee.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pm2abee3d"/><path class="xjy3z5hee"/></g>`,
		"fallback": "bi:play-btn",
	});
}

export default Component;

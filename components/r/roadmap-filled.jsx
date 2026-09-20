import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qragsc5lk.css';
import '../../css/a/aefkribzo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qragsc5lk"/><path class="aefkribzo"/></g>`,
		"fallback": "reicon:roadmap-filled",
	});
}

export default Component;

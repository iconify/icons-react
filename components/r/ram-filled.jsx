import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ek3c-kfkr.css';
import '../../css/g/ggnuxxlrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ek3c-kfkr"/><path class="ggnuxxlrx"/></g>`,
		"fallback": "reicon:ram-filled",
	});
}

export default Component;

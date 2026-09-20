import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/s/sg3l2ikrs.css';
import '../../css/f/f-r-1v_-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="sg3l2ikrs"/><path class="f-r-1v_-f"/></g>`,
		"fallback": "reicon:revote-filled",
	});
}

export default Component;

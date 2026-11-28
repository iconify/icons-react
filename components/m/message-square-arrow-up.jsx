import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dp12a2bii.css';
import '../../css/l/llbvajbbl.css';
import '../../css/z/z8tk5qlko.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="dp12a2bii"/><path class="llbvajbbl"/><path class="z8tk5qlko"/></g>`,
		"fallback": "iconaut:message-square-arrow-up",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rj3kh7bcd.css';
import '../../css/d/d1xyvabzq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rj3kh7bcd"/><path class="d1xyvabzq"/></g>`,
		"fallback": "reicon:pen-add-filled",
	});
}

export default Component;

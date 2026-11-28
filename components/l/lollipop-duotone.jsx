import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/c6y0kn0af.css';
import '../../css/v/vt6d6sbbz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="c6y0kn0af secondary"/><path class="primary vt6d6sbbz"/></g>`,
		"fallback": "iconaut:lollipop-duotone",
	});
}

export default Component;

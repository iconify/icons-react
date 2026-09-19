import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hd81asb-q.css';
import '../../css/v/v3ej9abjg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hd81asb-q"/><path class="v3ej9abjg"/></g>`,
		"fallback": "griddy-icons:raindrops",
	});
}

export default Component;

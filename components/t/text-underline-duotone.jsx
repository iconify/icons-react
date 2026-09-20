import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hb3g4ud1g.css';
import '../../css/o/ozd_fllen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hb3g4ud1g"/><path class="ozd_fllen"/></g>`,
		"fallback": "reicon:text-underline-duotone",
	});
}

export default Component;

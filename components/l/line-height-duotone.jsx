import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/ul_x5k6ap.css';
import '../../css/q/q187ql-rj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="secondary ul_x5k6ap"/><path class="primary q187ql-rj"/></g>`,
		"fallback": "iconaut:line-height-duotone",
	});
}

export default Component;

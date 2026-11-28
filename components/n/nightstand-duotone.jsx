import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/petvwqbez.css';
import '../../css/e/ev0ukv22g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="petvwqbez secondary"/><path class="ev0ukv22g primary"/></g>`,
		"fallback": "iconaut:nightstand-duotone",
	});
}

export default Component;

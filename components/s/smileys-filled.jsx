import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xlv-74j9b.css';
import '../../css/t/t_eaq8brd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xlv-74j9b"/><path class="t_eaq8brd"/></g>`,
		"fallback": "reicon:smileys-filled",
	});
}

export default Component;

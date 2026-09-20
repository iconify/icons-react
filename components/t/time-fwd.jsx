import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o51d5g53p.css';
import '../../css/f/f04ximt-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o51d5g53p"/><path class="f04ximt-u"/></g>`,
		"fallback": "reicon:time-fwd",
	});
}

export default Component;

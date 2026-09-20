import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pj9vrz0dg.css';
import '../../css/f/f04ximt-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pj9vrz0dg"/><path class="f04ximt-u"/></g>`,
		"fallback": "reicon:time-back",
	});
}

export default Component;

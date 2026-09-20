import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ilsgr9_ng.css';
import '../../css/f/fx57g0bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ilsgr9_ng"/><path class="fx57g0bqc"/></g>`,
		"fallback": "nrk:list-arrow-to-bottom-expressive",
	});
}

export default Component;

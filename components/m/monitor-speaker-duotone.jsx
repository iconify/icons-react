import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/f/fckx7bbzo.css';
import '../../css/f/f_m18jbex.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="fckx7bbzo secondary"/><path class="f_m18jbex primary"/></g>`,
		"fallback": "iconaut:monitor-speaker-duotone",
	});
}

export default Component;

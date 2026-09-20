import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/l/ly9mhacgf.css';
import '../../css/p/pu11e1b-u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ly9mhacgf"/><path class="pu11e1b-u"/></g>`,
		"fallback": "nrk:play-slash-expressive",
	});
}

export default Component;

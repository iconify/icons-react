import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hrjjki0eb.css';
import '../../css/q/qo8-3w2nr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hrjjki0eb"/><path clip-rule="evenodd" class="qo8-3w2nr"/></g>`,
		"fallback": "nrk:thumbs-up-solid",
	});
}

export default Component;

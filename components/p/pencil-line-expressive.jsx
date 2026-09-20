import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gg_uvryce.css';
import '../../css/p/pbd5qvaki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gg_uvryce"/><path class="pbd5qvaki"/></g>`,
		"fallback": "nrk:pencil-line-expressive",
	});
}

export default Component;

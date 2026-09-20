import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/c/cyzvz_9cw.css';
import '../../css/q/qlvydub0o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="cyzvz_9cw"/><path class="qlvydub0o"/></g>`,
		"fallback": "nrk:list-arrow-to-top",
	});
}

export default Component;

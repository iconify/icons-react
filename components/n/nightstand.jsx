import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/zzhokwb7e.css';
import '../../css/u/ud6dshb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="zzhokwb7e"/><path clip-rule="evenodd" class="ud6dshb7a"/></g>`,
		"fallback": "reicon:nightstand",
	});
}

export default Component;

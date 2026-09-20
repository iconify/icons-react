import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/n/nu367bc9r.css';
import '../../css/u/ud6dshb7a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="nu367bc9r"/><path clip-rule="evenodd" class="ud6dshb7a"/></g>`,
		"fallback": "reicon:nightstand2",
	});
}

export default Component;

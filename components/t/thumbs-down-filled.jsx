import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tyk5_dr3q.css';
import '../../css/l/lyck-6bmz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="tyk5_dr3q"/><path class="lyck-6bmz"/></g>`,
		"fallback": "reicon:thumbs-down-filled",
	});
}

export default Component;

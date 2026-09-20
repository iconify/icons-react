import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/b/b9ot3z6ar.css';
import '../../css/h/hau0clqfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="b9ot3z6ar"/><path class="hau0clqfz"/></g>`,
		"fallback": "reicon:messages-filled",
	});
}

export default Component;

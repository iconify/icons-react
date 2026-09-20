import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gcsnatayp.css';
import '../../css/v/v9hbe6b1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="gcsnatayp"/><path class="v9hbe6b1r"/></g>`,
		"fallback": "reicon:list-down-duotone",
	});
}

export default Component;

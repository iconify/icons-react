import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xkjwfoo2r.css';
import '../../css/r/r65qj9rpc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xkjwfoo2r"/><path class="r65qj9rpc"/></g>`,
		"fallback": "reicon:star2-duotone",
	});
}

export default Component;

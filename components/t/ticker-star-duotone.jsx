import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/t/tulzjl44f.css';
import '../../css/a/ai8u9mbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="tulzjl44f"/><path class="ai8u9mbxy"/></g>`,
		"fallback": "reicon:ticker-star-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/d/dcnxkj28m.css';
import '../../css/t/tw-c54bfr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="dcnxkj28m"/><path clip-rule="evenodd" class="tw-c54bfr"/></g>`,
		"fallback": "reicon:stopwatch-off",
	});
}

export default Component;

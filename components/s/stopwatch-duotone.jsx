import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g9weubcys.css';
import '../../css/g/g50d4inet.css';
import '../../css/j/jrfwjg2rr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g9weubcys"/><path class="g50d4inet"/><path clip-rule="evenodd" class="jrfwjg2rr"/></g>`,
		"fallback": "reicon:stopwatch-duotone",
	});
}

export default Component;

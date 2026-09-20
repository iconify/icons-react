import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/jrfwjg2rr.css';
import '../../css/g/g9weubcys.css';
import '../../css/l/lpx720bup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="jrfwjg2rr"/><path class="g9weubcys"/><path class="lpx720bup"/></g>`,
		"fallback": "reicon:stopwatch-play-duotone",
	});
}

export default Component;

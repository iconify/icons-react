import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/h/hsi9apijf.css';
import '../../css/b/b0xtd884y.css';
import '../../css/j/jm47mgbht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="hsi9apijf"/><path class="b0xtd884y"/><path clip-rule="evenodd" class="jm47mgbht"/></g>`,
		"fallback": "reicon:send-clock",
	});
}

export default Component;

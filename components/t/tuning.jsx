import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/edcotc1wk.css';
import '../../css/p/pfiae_b2o.css';
import '../../css/j/jfjkz6btd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="edcotc1wk"/><path clip-rule="evenodd" class="pfiae_b2o"/><path class="jfjkz6btd"/></g>`,
		"fallback": "reicon:tuning",
	});
}

export default Component;

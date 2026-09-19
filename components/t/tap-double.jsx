import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/i5ewysb1u.css';
import '../../css/t/t7pas2b0i.css';
import '../../css/y/yeio0pa9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="i5ewysb1u"/><path class="t7pas2b0i"/><path clip-rule="evenodd" class="yeio0pa9r"/></g>`,
		"fallback": "gg:tap-double",
	});
}

export default Component;

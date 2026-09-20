import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wxsn-6h7y.css';
import '../../css/e/ecxurxb5b.css';
import '../../css/p/p33g7ob5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wxsn-6h7y"/><path class="ecxurxb5b"/><path class="p33g7ob5g"/></g>`,
		"fallback": "reicon:truck3-filled",
	});
}

export default Component;

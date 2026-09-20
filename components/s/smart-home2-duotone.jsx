import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/j/j-z99rbkh.css';
import '../../css/o/odvridbwd.css';
import '../../css/q/q-o132bcq.css';
import '../../css/r/rb48yznjf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="j-z99rbkh"/><path class="odvridbwd"/><path class="q-o132bcq"/><path class="rb48yznjf"/></g>`,
		"fallback": "reicon:smart-home2-duotone",
	});
}

export default Component;

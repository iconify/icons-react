import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wnlf9dbhp.css';
import '../../css/r/r87qfbcyw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wnlf9dbhp"/><path class="r87qfbcyw"/></g>`,
		"fallback": "coolicons:scale-bulk-round",
	});
}

export default Component;

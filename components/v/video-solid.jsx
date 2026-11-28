import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qq7ththme.css';
import '../../css/d/dnmvn73mt.css';
import '../../css/x/xb0tyxb1q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qq7ththme"/><path class="dnmvn73mt"/><path class="xb0tyxb1q"/></g>`,
		"fallback": "iconaut:video-solid",
	});
}

export default Component;

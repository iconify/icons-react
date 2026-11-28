import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/g5ndcm8yt.css';
import '../../css/p/p1gcrnbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="g5ndcm8yt secondary"/><path class="p1gcrnbmm primary"/></g>`,
		"fallback": "iconaut:map-pin-off-duotone",
	});
}

export default Component;

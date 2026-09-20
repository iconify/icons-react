import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ah19w4bfh.css';
import '../../css/u/um9qv2pjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ah19w4bfh"/><path class="um9qv2pjw"/></g>`,
		"fallback": "mynaui:speaker-solid",
	});
}

export default Component;

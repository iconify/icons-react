import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/m51zj83kr.css';
import '../../css/a/at-kqgdlc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="m51zj83kr"/><path class="at-kqgdlc wm-a"/></g>`,
		"fallback": "withicons:strikethrough-duo",
	});
}

export default Component;

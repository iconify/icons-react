import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7fmnlb4r.css';
import '../../css/w/ws63a0bby.css';
import '../../css/s/stdaf0bdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="j7fmnlb4r"><path class="ws63a0bby"/><path class="stdaf0bdx"/></g>`,
		"fallback": "streamline-ultimate:package-dimension",
	});
}

export default Component;

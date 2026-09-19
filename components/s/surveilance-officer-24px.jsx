import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/ednbuh-wm.css';
import '../../css/n/nb6phvbmm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ednbuh-wm"/><path clip-rule="evenodd" class="nb6phvbmm"/></g>`,
		"fallback": "healthicons:surveilance-officer-24px",
	});
}

export default Component;

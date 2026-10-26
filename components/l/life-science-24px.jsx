import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xstj_r6dq.css';
import '../../css/t/t8n2n4q9i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="xstj_r6dq"/><path class="t8n2n4q9i"/></g>`,
		"fallback": "healthicons:life-science-24px",
	});
}

export default Component;

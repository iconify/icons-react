import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pia03dk5m.css';
import '../../css/w/wjqrmzb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="pia03dk5m"/><path class="wjqrmzb4q"/></g>`,
		"fallback": "healthicons:intestinal-pain-24px",
	});
}

export default Component;

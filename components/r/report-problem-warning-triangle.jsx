import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/b/bptx-vxlu.css';
import '../../css/t/tdih0tbvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="bptx-vxlu"/><path class="tdih0tbvo"/></g>`,
		"fallback": "streamline-cyber:report-problem-warning-triangle",
	});
}

export default Component;

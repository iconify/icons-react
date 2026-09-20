import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hony7_bpx.css';
import '../../css/x/xv5w93_nx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hony7_bpx"/><path class="xv5w93_nx"/></g>`,
		"fallback": "tdesign:navigation-arrow",
	});
}

export default Component;

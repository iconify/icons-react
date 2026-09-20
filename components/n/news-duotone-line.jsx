import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wq704cctm.css';
import '../../css/i/ibxsn_bag.css';
import '../../css/a/axgyqgb4q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wq704cctm"/><rect class="ibxsn_bag"/><path class="axgyqgb4q"/></g>`,
		"fallback": "lets-icons:news-duotone-line",
	});
}

export default Component;

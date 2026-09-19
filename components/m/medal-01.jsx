import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xq777kb9z.css';
import '../../css/t/tj4xg5bkf.css';
import '../../css/p/p7q04xb2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xq777kb9z"/><path class="tj4xg5bkf"/><path class="p7q04xb2q"/></g>`,
		"fallback": "hugeicons:medal-01",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/p7q04xb2q.css';
import '../../css/r/rc38l5tfq.css';
import '../../css/g/g9bnktb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="p7q04xb2q"/><path class="rc38l5tfq"/><path class="g9bnktb9y"/></g>`,
		"fallback": "hugeicons:medal-03",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/d/dgy_fyb5q.css';
import '../../css/w/w8dlq76op.css';
import '../../css/c/cqcg--4ji.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="dgy_fyb5q"/><path class="w8dlq76op"/><path class="cqcg--4ji"/></g>`,
		"fallback": "hugeicons:justice-scale-01",
	});
}

export default Component;

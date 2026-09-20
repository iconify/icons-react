import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/q/qmt4c6b-t.css';
import '../../css/g/gkh-qy8gy.css';
import '../../css/b/b_q4on72s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="qmt4c6b-t"/><path class="gkh-qy8gy"/><path class="b_q4on72s"/></g>`,
		"fallback": "solar:smartphone-rotate-orientation-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gosfxuf4y.css';
import '../../css/p/pq-6i2bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gosfxuf4y"/><path class="pq-6i2bjp wm-a"/></g>`,
		"fallback": "withicons:paintbrush-solid",
	});
}

export default Component;

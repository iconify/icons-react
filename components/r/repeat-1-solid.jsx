import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/redw1hb1h.css';
import '../../css/o/o1wz4bbfo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="redw1hb1h"/><path class="o1wz4bbfo wm-s"/></g>`,
		"fallback": "withicons:repeat-1-solid",
	});
}

export default Component;

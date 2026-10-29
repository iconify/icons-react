import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/exxxbc9md.css';
import '../../css/n/no_pq6-6s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="exxxbc9md"/><path class="no_pq6-6s"/></g>`,
		"fallback": "withicons:rewind-duo",
	});
}

export default Component;

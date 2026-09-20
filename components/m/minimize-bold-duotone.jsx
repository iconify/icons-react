import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u-b0qjjhk.css';
import '../../css/i/itrq5jbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u-b0qjjhk"/><path class="itrq5jbqd"/></g>`,
		"fallback": "solar:minimize-bold-duotone",
	});
}

export default Component;

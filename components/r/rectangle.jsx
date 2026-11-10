import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tv_i372vi.css';
import '../../css/c/com4bvb6m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tv_i372vi"/><path class="com4bvb6m"/></g>`,
		"fallback": "andrsrxn:rectangle",
	});
}

export default Component;

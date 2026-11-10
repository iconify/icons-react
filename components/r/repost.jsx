import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vn7t8vthh.css';
import '../../css/c/c7sjr7bpo.css';
import '../../css/l/leaqxkbcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vn7t8vthh"/><path class="c7sjr7bpo"/><path class="leaqxkbcc"/></g>`,
		"fallback": "andrsrxn:repost",
	});
}

export default Component;

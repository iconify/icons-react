import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/zdw9dcb7o.css';
import '../../css/z/zbq-e--gs.css';
import '../../css/u/ua2ui3bev.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="zdw9dcb7o"/><path clip-rule="evenodd" class="zbq-e--gs"/><path clip-rule="evenodd" class="ua2ui3bev"/></g>`,
		"fallback": "skill-icons:qt-dark",
	});
}

export default Component;

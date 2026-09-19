import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/w/w6vhvkbxn.css';
import '../../css/r/rpcn0tyrm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="w6vhvkbxn"/><path class="rpcn0tyrm"/></g>`,
		"fallback": "hugeicons:sidebar-right-01",
	});
}

export default Component;

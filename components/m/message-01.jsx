import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/r/ryt1_kg8m.css';
import '../../css/f/fdvahlowc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="ryt1_kg8m"/><path class="fdvahlowc"/></g>`,
		"fallback": "hugeicons:message-01",
	});
}

export default Component;

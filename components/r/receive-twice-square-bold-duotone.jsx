import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm03gzbnp.css';
import '../../css/x/xdf-115pn.css';
import '../../css/p/pg11khr9e.css';
import '../../css/x/x4rvpjbds.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm03gzbnp"/><path class="xdf-115pn"/><path class="pg11khr9e"/><path class="x4rvpjbds"/>`,
		"fallback": "solar:receive-twice-square-bold-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5xbnj3bp.css';
import '../../css/t/t1563xbyd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5xbnj3bp"/><rect class="t1563xbyd"/>`,
		"fallback": "boxicons:poll-filled",
	});
}

export default Component;

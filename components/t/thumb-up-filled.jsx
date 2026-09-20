import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv3fcsbnj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv3fcsbnj"/>`,
		"fallback": "tabler:thumb-up-filled",
	});
}

export default Component;

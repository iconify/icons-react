import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w-uvrnlra.css';
import '../../css/b/b81tpq8nq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w-uvrnlra"/><path class="b81tpq8nq"/>`,
		"fallback": "streamline-ultimate:task-list-to-do-bold",
	});
}

export default Component;

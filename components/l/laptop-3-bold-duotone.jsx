import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bdvbgrb8q.css';
import '../../css/c/cq7nq2bzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bdvbgrb8q"/><path class="cq7nq2bzu"/>`,
		"fallback": "solar:laptop-3-bold-duotone",
	});
}

export default Component;

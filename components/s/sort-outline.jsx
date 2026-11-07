import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vkkvlhj7f.css';
import '../../css/p/pq35h-0il.css';
import '../../css/q/qq69lrb9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vkkvlhj7f"/><path class="pq35h-0il"/><path class="qq69lrb9z"/>`,
		"fallback": "solar:sort-outline",
	});
}

export default Component;

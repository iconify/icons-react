import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/un0pq6cid.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="un0pq6cid"/>`,
		"fallback": "tabler:rotate-rectangle",
	});
}

export default Component;

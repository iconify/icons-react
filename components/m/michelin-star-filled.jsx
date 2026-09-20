import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjkhnvb4s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjkhnvb4s"/>`,
		"fallback": "tabler:michelin-star-filled",
	});
}

export default Component;

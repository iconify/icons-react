import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0knn25cb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l0knn25cb"/>`,
		"fallback": "solar:server-2-outline",
	});
}

export default Component;

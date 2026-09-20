import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rbpp6qb1n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rbpp6qb1n"/>`,
		"fallback": "tabler:navigation-down",
	});
}

export default Component;

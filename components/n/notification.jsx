import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h68a5vtzz.css';
import '../../css/u/u6i9ewq7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="h68a5vtzz"/><path class="u6i9ewq7q"/>`,
		"fallback": "bxs:notification",
	});
}

export default Component;

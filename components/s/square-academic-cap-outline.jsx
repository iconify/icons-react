import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgdj1qb4t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qgdj1qb4t"/>`,
		"fallback": "solar:square-academic-cap-outline",
	});
}

export default Component;

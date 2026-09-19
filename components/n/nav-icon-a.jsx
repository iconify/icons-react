import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/arxjvacib.css';

const viewBox = {"width":28,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="arxjvacib"/>`,
		"fallback": "fontisto:nav-icon-a",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qb6uonjav.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qb6uonjav"/>`,
		"fallback": "simple-icons:stencyl",
	});
}

export default Component;

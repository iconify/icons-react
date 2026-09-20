import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cnqqqb4zo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cnqqqb4zo"/>`,
		"fallback": "ri:skip-up-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f052p4qoo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f052p4qoo"/>`,
		"fallback": "withicons:layout-dashboard-gloss",
	});
}

export default Component;

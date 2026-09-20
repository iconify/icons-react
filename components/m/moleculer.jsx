import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ejc422bcs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ejc422bcs"/>`,
		"fallback": "simple-icons:moleculer",
	});
}

export default Component;

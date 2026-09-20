import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgs0zpt0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jgs0zpt0l"/>`,
		"fallback": "solar:men-outline",
	});
}

export default Component;

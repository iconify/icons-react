import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfod9ygkd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfod9ygkd"/>`,
		"fallback": "simple-icons:numpy",
	});
}

export default Component;

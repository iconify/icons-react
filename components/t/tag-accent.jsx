import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/coig8-25c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="coig8-25c"/>`,
		"fallback": "proicons:tag-accent",
	});
}

export default Component;

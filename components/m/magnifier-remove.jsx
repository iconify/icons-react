import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/soj-5vb6c.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="soj-5vb6c"/>`,
		"fallback": "simple-line-icons:magnifier-remove",
	});
}

export default Component;

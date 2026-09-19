import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yogscsb9u.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yogscsb9u"/>`,
		"fallback": "fa6-solid:minus",
	});
}

export default Component;

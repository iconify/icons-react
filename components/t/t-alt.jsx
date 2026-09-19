import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/ra9pitbyh.css';
import '../../css/d/dwr76qb4e.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ra9pitbyh"/><path class="dwr76qb4e"/>`,
		"fallback": "carbon:t-alt",
	});
}

export default Component;

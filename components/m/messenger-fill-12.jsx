import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uaoqydbcj.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uaoqydbcj"/>`,
		"fallback": "garden:messenger-fill-12",
	});
}

export default Component;

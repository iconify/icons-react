import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vx5nsxb8m.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vx5nsxb8m"/>`,
		"fallback": "picon:tree",
	});
}

export default Component;

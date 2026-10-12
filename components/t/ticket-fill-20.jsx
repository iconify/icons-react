import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzpemx0rz.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzpemx0rz"/>`,
		"fallback": "garden:ticket-fill-20",
	});
}

export default Component;

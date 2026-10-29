import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kjrjh7x3m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kjrjh7x3m"/>`,
		"fallback": "withicons:picture-in-picture-solid",
	});
}

export default Component;

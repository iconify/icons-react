import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t66hbfb2l.css';
import '../../css/b/bkakk0bnh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t66hbfb2l"/><path class="bkakk0bnh"/>`,
		"fallback": "solar:pen-bold",
	});
}

export default Component;

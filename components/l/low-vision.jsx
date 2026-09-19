import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yjzeqy2ft.css';

const viewBox = {"width":1792,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yjzeqy2ft"/>`,
		"fallback": "fa:low-vision",
	});
}

export default Component;

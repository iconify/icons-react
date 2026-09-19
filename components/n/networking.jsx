import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mgx7qua1m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mgx7qua1m"/>`,
		"fallback": "dashicons:networking",
	});
}

export default Component;

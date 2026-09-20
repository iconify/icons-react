import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lwj3zabgx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lwj3zabgx"/>`,
		"fallback": "la:print",
	});
}

export default Component;

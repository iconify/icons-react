import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1np3qbtx.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1np3qbtx"/>`,
		"fallback": "picon:refresh",
	});
}

export default Component;

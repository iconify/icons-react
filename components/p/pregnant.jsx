import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0d8ap3yf.css';

const viewBox = {"width":1184,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0d8ap3yf"/>`,
		"fallback": "vs:pregnant",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wx4kzbcrv.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wx4kzbcrv"/>`,
		"fallback": "whh:markerdown",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2y3f5bzu.css';

const viewBox = {"width":1024,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k2y3f5bzu"/>`,
		"fallback": "fa:thermometer-quarter",
	});
}

export default Component;

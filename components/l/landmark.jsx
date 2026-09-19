import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7v8hib1w.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7v8hib1w"/>`,
		"fallback": "fa7-solid:landmark",
	});
}

export default Component;

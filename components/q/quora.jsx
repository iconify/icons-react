import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vrre60oiq.css';

const viewBox = {"width":1792,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vrre60oiq"/>`,
		"fallback": "fa:quora",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugv82mm9o.css';

const viewBox = {"width":616.059,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugv82mm9o"/>`,
		"fallback": "brandico:tumblr",
	});
}

export default Component;

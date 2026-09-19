import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-7k8u7qu.css';

const viewBox = {"width":831,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-7k8u7qu"/>`,
		"fallback": "whh:push",
	});
}

export default Component;

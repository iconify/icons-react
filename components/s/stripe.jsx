import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6le-k8fh.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6le-k8fh"/>`,
		"fallback": "fa7-brands:stripe",
	});
}

export default Component;

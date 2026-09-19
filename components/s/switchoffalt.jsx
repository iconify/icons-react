import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8zhiabov.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8zhiabov"/>`,
		"fallback": "whh:switchoffalt",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k8s5niyzo.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k8s5niyzo"/>`,
		"fallback": "icons8:picture",
	});
}

export default Component;

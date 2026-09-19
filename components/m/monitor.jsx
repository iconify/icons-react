import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k9kl6h36h.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k9kl6h36h"/>`,
		"fallback": "icons8:monitor",
	});
}

export default Component;

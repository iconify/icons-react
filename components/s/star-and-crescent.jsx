import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qi-k8fb9u.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qi-k8fb9u"/>`,
		"fallback": "fa7-solid:star-and-crescent",
	});
}

export default Component;

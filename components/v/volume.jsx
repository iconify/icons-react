import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b66jsbpns.css';

const viewBox = {"width":480,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b66jsbpns"/>`,
		"fallback": "fa-solid:volume",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k536l5z2i.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k536l5z2i"/>`,
		"fallback": "whh:scriptalt",
	});
}

export default Component;

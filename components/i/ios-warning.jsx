import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyf6e2qlo.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyf6e2qlo"/>`,
		"fallback": "ion:ios-warning",
	});
}

export default Component;

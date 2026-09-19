import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0dpx7b3y.css';

const viewBox = {"width":1026,"height":833};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0dpx7b3y"/>`,
		"fallback": "whh:playstation",
	});
}

export default Component;

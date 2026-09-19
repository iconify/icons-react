import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ckad6q9jx.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ckad6q9jx"/>`,
		"fallback": "dinkie-icons:test-tube-filled",
	});
}

export default Component;

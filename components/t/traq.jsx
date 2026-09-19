import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vg9f0cbnj.css';

const viewBox = {"width":896,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vg9f0cbnj"/>`,
		"fallback": "whh:traq",
	});
}

export default Component;

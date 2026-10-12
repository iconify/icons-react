import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yellpjx9e.css';
import '../../css/l/l8r0bab9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yellpjx9e"/><path class="l8r0bab9e"/>`,
		"fallback": "lucide-extended:warehouse-filled",
	});
}

export default Component;

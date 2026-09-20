import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e6kj7gj9m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e6kj7gj9m"/>`,
		"fallback": "ri:steering-2-fill",
	});
}

export default Component;

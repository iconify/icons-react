import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/co9xgs76y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="co9xgs76y"/>`,
		"fallback": "mdi:show-outline",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b8t74x36c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b8t74x36c"/>`,
		"fallback": "proicons:save",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au9gtvb2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="au9gtvb2u"/>`,
		"fallback": "mingcute:movie-2-fill",
	});
}

export default Component;

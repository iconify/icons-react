import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cov2xcb9y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cov2xcb9y"/>`,
		"fallback": "tabler:link-x",
	});
}

export default Component;

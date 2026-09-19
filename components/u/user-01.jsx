import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u-45xac-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u-45xac-i"/>`,
		"fallback": "ci:user-01",
	});
}

export default Component;

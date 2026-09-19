import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/om11f2y7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="om11f2y7y"/>`,
		"fallback": "heroicons-outline:search-circle",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/das9g7b-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="das9g7b-w"/>`,
		"fallback": "mdi:search-hands-free",
	});
}

export default Component;

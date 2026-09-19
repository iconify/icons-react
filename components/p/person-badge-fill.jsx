import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0ku27byo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0ku27byo"/>`,
		"fallback": "bi:person-badge-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfo7-6c4c.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yfo7-6c4c"/>`,
		"fallback": "topcoat:pencil",
	});
}

export default Component;

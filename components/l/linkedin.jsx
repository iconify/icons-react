import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/io96o8bux.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="io96o8bux"/>`,
		"fallback": "topcoat:linkedin",
	});
}

export default Component;

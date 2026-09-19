import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hr7htobqs.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hr7htobqs"/>`,
		"fallback": "topcoat:phone",
	});
}

export default Component;

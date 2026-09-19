import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-s4jxb4i.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-s4jxb4i"/>`,
		"fallback": "topcoat:save",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3vhyqp0k.css';

const viewBox = {"width":42,"height":42};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o3vhyqp0k"/>`,
		"fallback": "topcoat:picasa",
	});
}

export default Component;

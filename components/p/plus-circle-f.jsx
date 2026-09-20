import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7yg9o87o.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-2};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r7yg9o87o"/>`,
		"fallback": "jam:plus-circle-f",
	});
}

export default Component;

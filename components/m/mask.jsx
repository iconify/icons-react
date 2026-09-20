import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow894ob8e.css';

const viewBox = {"width":24,"height":24,"left":-2,"top":-6.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow894ob8e"/>`,
		"fallback": "jam:mask",
	});
}

export default Component;

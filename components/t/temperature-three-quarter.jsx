import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xsryn6b8i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xsryn6b8i"/>`,
		"fallback": "uil:temperature-three-quarter",
	});
}

export default Component;

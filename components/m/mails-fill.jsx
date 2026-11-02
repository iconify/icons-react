import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/baavd1mxz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="baavd1mxz"/>`,
		"fallback": "mingcute:mails-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/an9moxdyb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="an9moxdyb"/>`,
		"fallback": "mingcute:trouser-line",
	});
}

export default Component;

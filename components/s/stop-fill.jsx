import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bjpq_osli.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bjpq_osli"/>`,
		"fallback": "mingcute:stop-fill",
	});
}

export default Component;

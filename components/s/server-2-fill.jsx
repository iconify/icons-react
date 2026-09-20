import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bukq1mb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="bukq1mb7i"/>`,
		"fallback": "mingcute:server-2-fill",
	});
}

export default Component;

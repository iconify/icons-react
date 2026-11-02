import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo7x2ac5l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo7x2ac5l"/>`,
		"fallback": "mingcute:rudder-fill",
	});
}

export default Component;

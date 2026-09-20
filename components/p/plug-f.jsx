import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dfbmbcpyw.css';

const viewBox = {"width":24,"height":24,"left":-6,"top":-1.5};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dfbmbcpyw"/>`,
		"fallback": "jam:plug-f",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/acxrv9d-i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="acxrv9d-i"/>`,
		"fallback": "mingcute:layout-7-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5g88-oui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5g88-oui"/>`,
		"fallback": "mingcute:sun-fill",
	});
}

export default Component;

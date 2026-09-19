import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd63t2zpl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qd63t2zpl"/>`,
		"fallback": "griddy-icons:notification-off",
	});
}

export default Component;
